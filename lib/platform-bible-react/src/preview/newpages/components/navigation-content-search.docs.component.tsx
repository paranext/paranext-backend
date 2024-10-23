import NavigationContentSearch from '@/components/advanced/navigation-content-search.component';
import CodePreview from '@/preview/newpreview-components/code-preview.component';
import DocsPage, { DocsPageProps } from '@/preview/newpreview-components/docs-page.component';
import { ComponentProperty } from '@/preview/newpreview-components/properties-table.component';
import { NavEntry } from '@/preview/newpreview-components/quicknav.component';
import ApiReferenceSection from '@/preview/newpreview-components/section-api-reference.component';
import IntroSection from '@/preview/newpreview-components/section-intro.component';
import Section, { SectionApi } from '@/preview/newpreview-components/section.component';
import { UsabilityChecks } from '@/preview/newpreview-components/ux-checks.component';
import { useState } from 'react';

const uxApprovalList: UsabilityChecks = {
  rtl_ready: 'needed',
  font: 'needed',
  spacing: 'needed',
  themeable: 'needed',
  accessible: 'needed',
  wording: 'needed',
};

const props: ComponentProperty[] = [{ name: '???', type: '???', default: '???', values: '???' }];

const bestPracticesSectionApi: SectionApi = { updateIsOpen: undefined };
const usageSectionApi: SectionApi = { updateIsOpen: undefined };
const apiSectionApi: SectionApi = { updateIsOpen: undefined };

const sections: NavEntry[] = [
  { id: 'intro', name: 'Intro' },
  { id: 'best-practices', name: 'Best Practices', api: bestPracticesSectionApi },
  { id: 'usage', name: 'Usage', api: usageSectionApi },
  { id: 'api', name: 'Api Reference', api: apiSectionApi },
];

export default function NavigationContentSearchDocs({ direction }: DocsPageProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  const tabList = [
    {
      key: 'tab1',
      value: 'tab1',
      content: (
        <div>
          <h1>TAB 1 CONTENT</h1>
        </div>
      ),
    },
    {
      key: 'tab2',
      value: 'tab2',
      content: (
        <div>
          <h3>TAB 2 CONTENT</h3>
        </div>
      ),
    },
    {
      key: 'tab3',
      value: 'tab3',
      content: (
        <div>
          <h2>TAB 3 CONTENT</h2>
        </div>
      ),
    },
  ];

  const handleSearchChange = (newSearchValue: string) => {
    setSearchValue(newSearchValue);
  };

  return (
    <DocsPage
      sections={sections}
      content={
        <>
          <IntroSection
            id="intro"
            header="Navigation Content Search"
            githubComponentUrlPart="advanced/navigation-content-search.component.tsx"
            description="TBD"
            content={
              <NavigationContentSearch
                headerTitle={`Testing the NavigationContentSearch, current search value: ${searchValue}`}
                tabList={tabList}
                onSearch={handleSearchChange}
                searchPlaceholder="Search..."
                isSearchBarFullWidth
                direction={direction}
              />
            }
            usabilityChecks={uxApprovalList}
          />

          <Section
            id="best-practices"
            header="Best Practices"
            description="Use this component for ... TBD"
            api={bestPracticesSectionApi}
          />

          <Section
            id="usage"
            header="Usage"
            description="To use the NavigationContentSearch component, import it and pass the necessary props."
            content={<CodePreview code="import ..." />}
            api={usageSectionApi}
          />

          <ApiReferenceSection
            apiFunctionName="NavigationContentSearch"
            properties={props}
            sectionApi={apiSectionApi}
          />
        </>
      }
    />
  );
}