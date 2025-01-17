import { useState } from 'react';
import FilterableResourceList from '@/components/advanced/filterable-resource-list/filterable-resource-list.component';
import resourceExamples from './resource-examples';

const localizedStrings = {
  '%resources_action%': 'Action',
  '%resources_any%': 'Any',
  '%resources_dialog_subtitle%': 'Add resources to Home',
  '%resources_dialog_title%': 'Get Resources',
  '%resources_filterBy%': 'Filter by',
  '%resources_filterInput%': 'Search by name, language, type',
  '%resources_fullName%': 'Full Name',
  '%resources_get%': 'Get',
  '%resources_installed%': 'Installed',
  '%resources_language%': 'Language',
  '%resources_languages%': 'Languages',
  '%resources_loadingResources%': 'Loading resources...',
  '%resources_noResults%': 'No results found',
  '%resources_open%': 'Open',
  '%resources_remove%': 'Remove',
  '%resources_results%': 'results',
  '%resources_showing%': 'Showing',
  '%resources_size%': 'Size',
  '%resources_type%': 'Type',
  '%resources_types%': 'Types',
  '%resources_type_DBL%': 'DBL Resource',
  '%resources_type_ER%': 'Enhanced Resource',
  '%resources_type_SLR%': 'Source Language Text',
  '%resources_type_XR%': 'XML Resource',
  '%resources_type_unknown%': 'Unknown resource type',
  '%resources_update%': 'Update',
};

function FilterableResourceListExample() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['DBLResource']);

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  return (
    <FilterableResourceList
      localizedStrings={localizedStrings}
      resources={resourceExamples}
      isLoadingResources={false}
      selectedTypes={selectedTypes}
      setSelectedTypes={setSelectedTypes}
      selectedLanguages={selectedLanguages}
      setSelectedLanguages={setSelectedLanguages}
      openResource={() => {}}
      installResource={async () => {}}
      uninstallResource={async () => {}}
    />
  );
}

export default FilterableResourceListExample;
