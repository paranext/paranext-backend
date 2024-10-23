import { Button } from '@/components/shadcn-ui/button';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from './link.component';
import PropertiesTable, { PropertiesTableProps } from './properties-table.component';
import Section, { SectionApi } from './section.component';

type ApiReferenceSectionProps = PropertiesTableProps & { apiFunctionName: string } & {
  sectionApi: SectionApi;
};

function makeHeader(apiFunctionName: string) {
  return (
    <div className="tw-flex tw-items-center">
      <div>Api Reference</div>
      <Button size="icon" variant="link">
        <Link
          href={`https://paranext.github.io/paranext-core/platform-bible-react/functions/${apiFunctionName}.html`}
          newTab
          text={<SquareArrowOutUpRight className="tw-h-5" />}
        />
      </Button>
    </div>
  );
}

export default function ApiReferenceSection({
  properties,
  apiFunctionName,
  sectionApi,
}: ApiReferenceSectionProps) {
  return (
    <Section
      id="api"
      header={makeHeader(apiFunctionName)}
      description="All properties of the NavigationContentSearch component"
      content={<PropertiesTable properties={properties} />}
      api={sectionApi}
    />
  );
}