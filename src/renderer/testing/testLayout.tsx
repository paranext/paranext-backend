import { SavedTabInfo } from '@shared/data/web-view.model';
import { LayoutBase, TabBase } from 'rc-dock';

const createTab = (tabInfo: SavedTabInfo): TabBase => {
  return tabInfo as TabBase;
};

// NOTE: This structure represents what might be saved in a saved layout and
// thus looks different than a normal rc-dock layout.
const testLayout: LayoutBase = {
  dockbox: {
    mode: 'horizontal',
    children: [
      {
        mode: 'vertical',
        size: 200,
        children: [
          {
            tabs: [
              createTab({
                type: 'tab',
                data: { title: 'Bla', content: 'Random content!' },
              }),
            ],
          },
          {
            tabs: [
              createTab({ type: 'hello' }),
              createTab({
                type: 'tab',
                data: { title: 'two', content: 'Content for tab two' },
              }),
              createTab({
                type: 'tab',
                data: { title: 'one', content: 'Content for tab one' },
              }),
            ],
          },
        ],
      },
      {
        tabs: [createTab({ type: 'buttons' })],
      },
    ],
  },
  floatbox: {
    mode: 'float',
    children: [
      {
        tabs: [
          createTab({
            type: 'tab',
            data: { title: 'Floating', content: 'Floating content!' },
          }),
        ],
        x: 30,
        y: 60,
        w: 320,
        h: 300,
      },
    ],
  },
};

export default testLayout;
