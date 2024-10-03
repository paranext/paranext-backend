import { Localized, ProjectSettingProperties, SettingProperties } from 'platform-bible-utils';
import { SettingsList, SettingsListHeader } from 'platform-bible-react';
import { useMemo } from 'react';
import { ProjectSettingNames, SettingNames } from 'papi-shared-types';
import UserSetting from './user-setting.component';
import ProjectSetting from './project-setting.component';
import { ProjectSettingValues, UserSettingValues } from './setting.component';

/** Properties for a settings list component that displays either project or user settings */
type ProjectOrUserSettingsListProps = {
  /** Properties for either a project setting group or user setting group */
  settingProperties: Localized<ProjectSettingProperties> | Localized<SettingProperties>;
  /** Optional projectId, supplied if the list is for project settings */
  projectId?: string;
  /** Current search query to filter the list by */
  searchQuery: string;
  /** Settings group label */
  groupLabel: string;
  /** Optional settings group description */
  groupDescription?: string;
};

/**
 * Filters and displays a list of settings based on a search query and whether it's for project or
 * user settings, rendering either `ProjectSetting` or `UserSetting` components accordingly.
 */
export default function ProjectOrUserSettingsList({
  settingProperties,
  projectId,
  searchQuery,
  groupLabel,
  groupDescription,
}: ProjectOrUserSettingsListProps) {
  const filteredSettingsProperties = useMemo(():
    | Localized<ProjectSettingProperties>
    | Localized<SettingProperties> => {
    const filteredProperties: Localized<ProjectSettingProperties> | Localized<SettingProperties> =
      Object.fromEntries(
        Object.entries(settingProperties).filter(
          ([, property]) =>
            property.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.description?.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );

    return filteredProperties;
  }, [searchQuery, settingProperties]);

  return (
    <SettingsList key={groupLabel}>
      {Object.keys(filteredSettingsProperties).length > 0 ? (
        <SettingsListHeader primary={groupLabel} secondary={groupDescription} includeSeparator />
      ) : undefined}
      <div>
        {Object.entries(filteredSettingsProperties).map(([key, property]) =>
          projectId ? (
            <ProjectSetting
              key={key}
              // Key is a string technically, but it has to be a settingKey to access the setting
              // eslint-disable-next-line no-type-assertion/no-type-assertion
              settingKey={key as ProjectSettingNames}
              description={property.description}
              label={property.label}
              projectId={projectId}
              // Default is unknown technically but we know it has to be a project setting value
              // eslint-disable-next-line no-type-assertion/no-type-assertion
              defaultSetting={property.default as ProjectSettingValues}
            />
          ) : (
            <UserSetting
              key={key}
              // Key is a string technically, but it has to be a settingKey to access the setting
              // eslint-disable-next-line no-type-assertion/no-type-assertion
              settingKey={key as SettingNames}
              label={property.label}
              description={property.description}
              // Default is unknown technically, but we know it has to be a setting value
              // eslint-disable-next-line no-type-assertion/no-type-assertion
              defaultSetting={property.default as UserSettingValues}
            />
          ),
        )}
      </div>
    </SettingsList>
  );
}
