import { testingLocalizationService } from '@extension-host/services/localization.service-host';
import logger from '@shared/services/logger.service';
import { SettingNames } from 'papi-shared-types';
import { LocalizeKey } from 'platform-bible-utils';

const MOCK_FILES: { [uri: string]: string } = {
  'resources://assets/localization/en.json': `{
    "%some_localization_key%": "This is the English text for %some_localization_key%.",
    "%submitButton%": "Submit"
  }`,
  'resources://assets/localization/fr.json': `{
    "%some_localization_key%": "Ceci est le texte en français pour %some_localization_key%.",
    "%submitButton%": "Soumettre"
  }`,
  'resources://assets/localization/metadata.json': `{
    "%yes%": {
      "notes": "A confirmation word used in many places. For example, this may be used as the label on a button on a dialog.",
      "fallbackKey": "%confirm%"
    },
    "%submit%": {
      "fallbackKey": "%yes%"
    }
  }`,
};

jest.mock('@shared/services/settings.service', () => ({
  __esModule: true,
  default: {
    get<SettingName extends SettingNames>(key: SettingName) {
      if (key === 'platform.interfaceLanguage') return ['en'];
      return undefined;
    },
  },
}));

jest.mock('@node/services/node-file-system.service', () => ({
  readDir: () => {
    const entries: Readonly<{
      file: string[];
      directory: string[];
      unknown: string[];
    }> = {
      file: Object.keys(MOCK_FILES),
      directory: [],
      unknown: [],
    };
    return Promise.resolve(entries);
  },
  readFileText: (uri: string) => {
    const stringContentsOfFile: string = MOCK_FILES[uri];
    return Promise.resolve(stringContentsOfFile);
  },
}));

jest.mock('@shared/services/logger.service', () => ({
  __esModule: true,
  default: {
    warn: jest.fn(() => {}),
  },
}));

let localizationDataProviderEngine: Awaited<
  ReturnType<typeof testingLocalizationService.implementLocalizationDataProviderEngine>
>;
beforeAll(async () => {
  localizationDataProviderEngine =
    await testingLocalizationService.implementLocalizationDataProviderEngine();
});
afterEach(() => {
  jest.restoreAllMocks();
});

test('Correct localized value returned to match single localizeKey', async () => {
  const LOCALIZE_KEY = '%submitButton%';
  const response = await localizationDataProviderEngine.getLocalizedString({
    localizeKey: LOCALIZE_KEY,
    locales: ['fr'],
  });
  expect(response).toEqual('Soumettre');
});

test('Correct localized values returned to match array of localizeKeys', async () => {
  const LOCALIZE_KEYS: LocalizeKey[] = ['%submitButton%', '%some_localization_key%'];
  const response = await localizationDataProviderEngine.getLocalizedStrings({
    localizeKeys: LOCALIZE_KEYS,
    locales: ['fr'],
  });
  expect(response).toEqual({
    '%submitButton%': 'Soumettre',
    '%some_localization_key%': 'Ceci est le texte en français pour %some_localization_key%.',
  });
});

test('Key returned with localizeKey that does not exist', async () => {
  const LOCALIZE_KEY = '%the_wrong_key%';
  expect(
    await localizationDataProviderEngine.getLocalizedString({
      localizeKey: LOCALIZE_KEY,
      locales: ['fr'],
    }),
  ).toEqual('%the_wrong_key%');
  expect(logger.warn).toHaveBeenCalledWith(
    'No localizations found for key or fallback key in any of the given languages for localize key: %the_wrong_key%',
  );
});

test('Keys returned with localizeKeys that do not exist', async () => {
  const LOCALIZE_KEYS: LocalizeKey[] = ['%the_wrong_key%', '%the_other_wrong_key%'];
  expect(
    await localizationDataProviderEngine.getLocalizedStrings({
      localizeKeys: LOCALIZE_KEYS,
      locales: ['fr'],
    }),
  ).toEqual({
    '%the_wrong_key%': '%the_wrong_key%',
    '%the_other_wrong_key%': '%the_other_wrong_key%',
  });
  expect(logger.warn).toHaveBeenCalledWith(
    'No localizations found for key or fallback key in any of the given languages for localize key: %the_wrong_key%',
  );
  expect(logger.warn).toHaveBeenCalledWith(
    'No localizations found for key or fallback key in any of the given languages for localize key: %the_other_wrong_key%',
  );
});

test('Strings and keys returned with localizeKeys where one exists but the other does not', async () => {
  const LOCALIZE_KEYS: LocalizeKey[] = ['%submitButton%', '%the_wrong_key%'];
  expect(
    await localizationDataProviderEngine.getLocalizedStrings({
      localizeKeys: LOCALIZE_KEYS,
      locales: ['fr'],
    }),
  ).toEqual({
    '%submitButton%': 'Soumettre',
    '%the_wrong_key%': '%the_wrong_key%',
  });
  expect(logger.warn).toHaveBeenCalledWith(
    'No localizations found for key or fallback key in any of the given languages for localize key: %the_wrong_key%',
  );
});

test('Error returned with localizeKey and incorrectly formatted language code', async () => {
  const LOCALIZE_KEY = '%submitButton%'; // irrelevant because it will throw for language code before it accesses key/value pairs
  await expect(
    localizationDataProviderEngine.getLocalizedString({
      localizeKey: LOCALIZE_KEY,
      locales: ['IncorrectlyFormattedLang001'],
    }),
  ).rejects.toThrow('Incorrect locale information provided');
  expect(logger.warn).toHaveBeenCalledWith(
    'getCanonicalLocales failed for IncorrectlyFormattedLang001 with error RangeError: Incorrect locale information provided',
  );
});

test('Error returned with localizeKeys and incorrect language code', async () => {
  const LOCALIZE_KEYS: LocalizeKey[] = ['%submitButton%', '%some_localization_key%']; // irrelevant because it will throw for language code before it accesses key/value pairs
  await expect(
    localizationDataProviderEngine.getLocalizedStrings({
      localizeKeys: LOCALIZE_KEYS,
      locales: ['Incorrect locale information provided001'],
    }),
  ).rejects.toThrow('Incorrect locale information provided');
  expect(logger.warn).toHaveBeenCalledWith(
    'getCanonicalLocales failed for Incorrect locale information provided001 with error RangeError: Incorrect locale information provided',
  );
});

test('Default language is english when no language provided with localizeKey', async () => {
  const LOCALIZE_KEY = '%submitButton%';
  const response = await localizationDataProviderEngine.getLocalizedString({
    localizeKey: LOCALIZE_KEY,
  });
  await expect(response).toEqual('Submit');
});

test('Default language is english when no language provided with localizeKeys', async () => {
  const LOCALIZE_KEYS: LocalizeKey[] = ['%submitButton%', '%some_localization_key%'];
  const response = await localizationDataProviderEngine.getLocalizedStrings({
    localizeKeys: LOCALIZE_KEYS,
  });
  expect(response).toEqual({
    '%some_localization_key%': 'This is the English text for %some_localization_key%.',
    '%submitButton%': 'Submit',
  });
});

test('Good key and missing but valid language code return default English', async () => {
  const LOCALIZE_KEY = '%submitButton%';
  globalThis.isPackaged = true;
  const response = await localizationDataProviderEngine.getLocalizedString({
    localizeKey: LOCALIZE_KEY,
    locales: ['qya-Latn'],
  });
  expect(response).toEqual('Submit');
});

test('Good keys and missing but valid language code return default English', async () => {
  const LOCALIZE_KEYS: LocalizeKey[] = ['%submitButton%', '%some_localization_key%'];
  const response = await localizationDataProviderEngine.getLocalizedStrings({
    localizeKeys: LOCALIZE_KEYS,
    locales: ['qya-Latn'],
  });
  expect(response).toEqual({
    '%some_localization_key%': 'This is the English text for %some_localization_key%.',
    '%submitButton%': 'Submit',
  });
});
