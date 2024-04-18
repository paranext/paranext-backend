import { PLATFORM_NAMESPACE } from '@shared/data/platform.data';
import LogError from '@shared/log-error.model';
import localizationService from '@shared/services/localization.service';
import { SettingNames, SettingTypes } from 'papi-shared-types';
import {
  DocumentCombiner,
  JsonDocumentLike,
  Localized,
  Setting,
  SettingProperties,
  SettingsContribution,
  SettingsGroup,
  deepClone,
  startsWith,
  substring,
} from 'platform-bible-utils';

/**
 * Information about one specific setting. Basically just {@link Setting} but with specific default
 * type info
 */
type SettingInfo<SettingName extends SettingNames> = Setting & {
  default: SettingTypes[SettingName];
};

/** Information about all settings. Keys are setting keys, values are information for that setting */
type AllSettingsInfo = {
  [SettingName in SettingNames]: SettingInfo<SettingName>;
};

export type SettingsContributionInfo = {
  /** Map of extension name to that extension's provided settings groups if provided */
  contributions: { [extensionName: string]: SettingsGroup[] | undefined };
  /**
   * Map of setting name to setting definition. For type specificity and ease of accessing settings
   * since they're a bit hard to find in `contributions`
   */
  settings: Partial<AllSettingsInfo>;
};

export type LocalizedSettingsContributionInfo = Localized<SettingsContributionInfo>;

// #region Helper functions

function getAllSettingProperties<S extends SettingsGroup | Localized<SettingsGroup>>(
  settingsGroups: S[],
): S extends SettingsGroup ? SettingProperties : Localized<SettingProperties> {
  return Object.fromEntries(
    settingsGroups.flatMap((settingsGroup) => Object.entries(settingsGroup.properties)),
  );
}

function transformSettingsContributionToSettingsContributionInfo(
  contributionName: string,
  contribution: SettingsContribution,
): SettingsContributionInfo {
  const contributionArray = Array.isArray(contribution) ? contribution : [contribution];

  return {
    contributions: {
      [contributionName]: contributionArray,
    },
    settings: getAllSettingProperties(contributionArray),
  };
}

/** Remove '%' from the beginning and ending of the input string */
function removePercentSigns(localizeKey: string): string {
  return substring(localizeKey, 1, localizeKey.length - 1);
}

/** Deep clones and localizes settings contribution info */
async function localizeSettingsContributionInfo(
  settings: SettingsContributionInfo,
  settingTypeName: string,
): Promise<LocalizedSettingsContributionInfo> {
  try {
    // Gather localized string keys
    const localizedStringKeys = new Set<string>();
    Object.values(settings.contributions).forEach((extensionSettings) =>
      extensionSettings?.forEach((settingsGroup) => {
        localizedStringKeys.add(removePercentSigns(settingsGroup.label));
        if (settingsGroup.description)
          localizedStringKeys.add(removePercentSigns(settingsGroup.description));

        Object.values(settingsGroup.properties).forEach((setting: Setting) => {
          localizedStringKeys.add(removePercentSigns(setting.label));
          if (setting.description) localizedStringKeys.add(removePercentSigns(setting.description));
        });
      }),
    );

    // Get strings for keys
    const localizedStrings = await localizationService.getLocalizedStrings([
      ...localizedStringKeys,
    ]);

    // Deep clone then replace strings with localized versions
    // We're going through the process of localizing here
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    const localizedSettings = deepClone(settings) as LocalizedSettingsContributionInfo;

    Object.values(localizedSettings.contributions).forEach((extensionSettings) =>
      extensionSettings?.forEach((settingsGroup) => {
        settingsGroup.label = localizedStrings[removePercentSigns(settingsGroup.label)];
        if (settingsGroup.description)
          settingsGroup.description =
            localizedStrings[removePercentSigns(settingsGroup.description)];

        Object.values(settingsGroup.properties).forEach((setting: Localized<Setting>) => {
          setting.label = localizedStrings[removePercentSigns(setting.label)];
          if (setting.description)
            setting.description = localizedStrings[removePercentSigns(setting.description)];
        });
      }),
    );

    localizedSettings.settings = getAllSettingProperties(
      Object.values(localizedSettings.contributions).flatMap(
        // For some reason, it is not able to filter out `undefined`, so here it is manually
        // eslint-disable-next-line no-type-assertion/no-type-assertion
        (extensionSettings) => extensionSettings as Localized<SettingsGroup[]>,
      ),
    );

    return localizedSettings;
  } catch (e) {
    throw new LogError(
      `${settingTypeName}s document combiner threw while localizing ${settingTypeName}s contribution info: ${e}`,
    );
  }
}

// #endregion

export default abstract class SettingsDocumentCombinerBase extends DocumentCombiner {
  /** Name for type of setting to use in error messages */
  protected readonly settingTypeName: string = 'Setting';

  /** Cached promise for getting the localized output */
  private localizedOutputPromise:
    | Promise<LocalizedSettingsContributionInfo | undefined>
    | undefined;

  constructor(baseDocument: JsonDocumentLike) {
    super(baseDocument, {
      copyDocuments: false,
      ignoreDuplicateProperties: false,
      ignoreDuplicateArrayItems: true,
    });

    this.onDidRebuild(() => {
      // If we rebuilt, bust the localized output cache since the non-localized output updated
      this.localizedOutputPromise = undefined;
    });
  }

  /**
   * This method is intended to be layered over by a child class to expose the localized setting
   * info.
   *
   * Get the current set of settings contribution info given all the input documents with all
   * localized string keys localized properly.
   *
   * NOTE: If the input documents might have changed since the last time the settings contributions
   * were retrieved, you can call `rebuild` to incorporate those document changes before calling
   * this getter. For example, if one of the input document objects changed and
   * `addOrUpdateContribution` wasn't called explicitly, those document changes will not be seen in
   * the current set of settings contributions. If all the input documents are static, then there is
   * no need to ever rebuild once all the documents have been contributed to this combiner.
   */
  protected async getLocalizedOutput(): Promise<LocalizedSettingsContributionInfo | undefined> {
    if (!this.latestOutput) return undefined;

    // Return promise if cached
    if (this.localizedOutputPromise) return this.localizedOutputPromise;

    // Not awaiting this promise, but we're catching inside the function and logging
    this.localizedOutputPromise = localizeSettingsContributionInfo(
      // We know the latest output is always SettingsContributionInfo because of our work in this combiner
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      this.latestOutput as SettingsContributionInfo,
      this.settingTypeName,
    );

    return this.localizedOutputPromise;
  }

  // We don't need `this` on this override method
  // eslint-disable-next-line class-methods-use-this
  protected override validateBaseDocument(baseDocument: JsonDocumentLike): void {
    this.performSchemaValidation(baseDocument, PLATFORM_NAMESPACE);
  }

  // We don't need `this` on this override method
  // eslint-disable-next-line class-methods-use-this
  protected override transformBaseDocumentAfterValidation(
    baseDocument: JsonDocumentLike,
  ): JsonDocumentLike {
    return transformSettingsContributionToSettingsContributionInfo(
      PLATFORM_NAMESPACE,
      // We validated that this is true
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      baseDocument as SettingsContribution,
    );
  }

  // We don't need `this` on this override method
  // eslint-disable-next-line class-methods-use-this
  protected override validateContribution(documentName: string, document: JsonDocumentLike): void {
    // Make sure it is a SettingsContribution
    this.performSchemaValidation(document, documentName);

    // We just made sure this is true
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    const contribution = document as SettingsContribution;
    const contributionArray = Array.isArray(contribution) ? contribution : [contribution];

    // Make sure every setting contributed has the extension name as the namespace
    // and no setting's name is duplicated
    const namespace = documentName ? `${documentName}.` : '';

    const settingNames = new Set<string>();
    contributionArray.forEach((settingsGroup) =>
      Object.keys(settingsGroup.properties).forEach((settingName) => {
        if (!startsWith(settingName, namespace))
          throw new Error(
            `${this.settingTypeName}s contribution from ${documentName} provided ${this.settingTypeName} ${settingName} which does not start with '${namespace}'`,
          );

        if (settingNames.has(settingName))
          throw new Error(
            `${this.settingTypeName}s contribution from ${documentName} provided ${this.settingTypeName} ${settingName} more than once!`,
          );

        settingNames.add(settingName);
      }),
    );
  }

  // We don't need `this` on this override method
  // eslint-disable-next-line class-methods-use-this
  protected override transformContributionAfterValidation(
    documentName: string,
    document: JsonDocumentLike,
  ): JsonDocumentLike {
    return transformSettingsContributionToSettingsContributionInfo(
      documentName,
      // We validated that this is true
      // eslint-disable-next-line no-type-assertion/no-type-assertion
      document as SettingsContribution,
    );
  }

  // We don't need `this` on this override method
  // eslint-disable-next-line class-methods-use-this
  protected override validateOutput(): void {
    // We already validated input documents and built the output ourselves, so we don't have any more
    // validating to do. Unless someday we want to double check we have a properly formatted
    // `SettingsContributionInfo`
  }

  /** Validate the base and contribution documents against the JSON schema */
  protected abstract performSchemaValidation(document: JsonDocumentLike, docType: string): void;
}
