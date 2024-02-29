import { PlatformMenus } from 'platform-bible-utils';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import GridMenu from './grid-menu.component';
import NonValidatingDocumentCombiner from '../test-utils/non-validating-document-combiner';
import * as jsonMenu from './sample.composed.full.menu.json';

describe('GridMenu', () => {
  const topMenuCombiner = new NonValidatingDocumentCombiner(jsonMenu, {
    copyDocuments: false,
    ignoreDuplicateProperties: true,
  });

  // Assert the type that schema validation should have already sorted out
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  const menuData = topMenuCombiner.output as PlatformMenus;
  render(<GridMenu multiColumnMenu={menuData.mainMenu} commandHandler={() => {}} />);

  it('renders submenu when parent menu is clicked', async () => {
    const parentMenuItem = screen.getByRole('menuitem', { name: '%paratext_help%' });

    fireEvent.click(parentMenuItem);

    screen.getByRole('menuitem', { name: '%paratext_helpVideos%' });
    const helpGuideMenuItem = screen.getByRole('menuitem', { name: '%paratext_helpGuide%' });
    await userEvent.hover(helpGuideMenuItem);
    const tip = await screen.findByRole('tooltip');
    expect(tip).toBeInTheDocument();
    expect(tip.textContent).toBe('%paratext_helpGuide_tooltip%');
  });
});