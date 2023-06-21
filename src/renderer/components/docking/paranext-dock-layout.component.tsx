import 'rc-dock/dist/rc-dock.css';
import './paranext-dock-layout.component.css';
import { useRef, useEffect } from 'react';
import DockLayout, {
  BoxData,
  FloatPosition,
  LayoutSize,
  PanelData,
  TabData,
  TabGroup,
} from 'rc-dock';
import { createErrorTab } from '@renderer/components/docking/error-tab.component';
import ParanextPanel from '@renderer/components/docking/paranext-panel.component';
import ParanextTabTitle from '@renderer/components/docking/paranext-tab-title.component';
import {
  loadWebViewTab,
  TAB_TYPE_WEBVIEW,
  saveWebViewTab,
} from '@renderer/components/web-view.component';
import { loadAboutTab, TAB_TYPE_ABOUT } from '@renderer/testing/about-panel.component';
import { loadButtonsTab, TAB_TYPE_BUTTONS } from '@renderer/testing/test-buttons-panel.component';
import testLayout from '@renderer/testing/test-layout.data';
import { loadTestTab, TAB_TYPE_TEST } from '@renderer/testing/test-panel.component';
import {
  loadQuickVerseHeresyTab,
  TAB_TYPE_QUICK_VERSE_HERESY,
} from '@renderer/testing/test-quick-verse-heresy-panel.component';
import {
  FloatLayout,
  SavedTabInfo,
  TabLoader,
  TabInfo,
  TabSaver,
  Layout,
  WebViewProps,
} from '@shared/data/web-view.model';
import LogError from '@shared/log-error.model';
import {
  OnLayoutChangeRCDock,
  registerDockLayout,
  saveTabInfoBase,
} from '@shared/services/web-view.service';
import { getErrorMessage } from '@shared/utils/util';
import PlatformBibleToolbar from '../platform-bible-toolbar';

type TabType = string;

type RCDockTabInfo = TabData & TabInfo;

const DOCK_FLOAT_OFFSET = 28;
// NOTE: 'card' is a built-in style. We can likely remove it when we create a full theme for
// Paranext.
const TAB_GROUP = 'card paranext';

const groups: { [key: string]: TabGroup } = {
  [TAB_GROUP]: {
    maximizable: false, // Don't allow groups of tabs to be maximized
    floatable: true, // Allow tabs to be floated
    animated: false, // Don't animate tab transitions
    // TODO: Currently allowing newWindow crashes since electron doesn't seem to have window.open defined?
    // newWindow: true, // Allow floating windows to show in a native window
  },
};

// #region utility functions that deal with loading, saving, and adding webviews. This code should
// really be in `web-view.service.ts`, but that file cannot currently import renderer code as it is
// a shared file.
// TODO: please move these utility functions with #203

/** tab loader functions for each Paranext tab type */
const tabLoaderMap = new Map<TabType, TabLoader>([
  [TAB_TYPE_ABOUT, loadAboutTab],
  [TAB_TYPE_BUTTONS, loadButtonsTab],
  [TAB_TYPE_QUICK_VERSE_HERESY, loadQuickVerseHeresyTab],
  [TAB_TYPE_TEST, loadTestTab],
  [TAB_TYPE_WEBVIEW, loadWebViewTab],
]);

/** tab saver functions for each Paranext tab type that wants to override the default */
const tabSaverMap = new Map<TabType, TabSaver>([[TAB_TYPE_WEBVIEW, saveWebViewTab]]);

let previousTabId: string | undefined;
let floatPosition: FloatPosition = { left: 0, top: 0, width: 0, height: 0 };

/**
 * Loads tab data from the specified saved tab information by running the tab loader provided by the
 * component file that registered this tab type
 * @param savedTabInfo Data that is to be used to create the new tab (comes from rc-dock)
 * @returns tab that holds all info needed to make an actual tab in the dock layout
 */
function loadSavedTabInfo(savedTabInfo: SavedTabInfo): TabInfo {
  const tabLoader = tabLoaderMap.get(savedTabInfo.tabType);
  if (!tabLoader) return createErrorTab(`No tab loader for tabType '${savedTabInfo.tabType}'`);

  // Call the creation method to let the extension method create the tab
  try {
    return tabLoader(savedTabInfo);
  } catch (e) {
    // If the tab couldn't be created, replace it with an error tab
    return createErrorTab(getErrorMessage(e));
  }
}

/**
 * Loads tab data from the specified saved tab information into an actual dock layout tab
 * @param savedTabInfo Data that is to be used to create the new tab (comes from rc-dock)
 * @returns live dock layout tab ready to used
 */
export function loadTab(savedTabInfo: SavedTabInfo): RCDockTabInfo {
  if (!savedTabInfo.id) throw new LogError('loadTab: "id" is missing.');

  // Load the tab from the saved tab info
  const tabInfo = loadSavedTabInfo(savedTabInfo);

  // Translate the data from the loaded tab to be in the form needed by rc-dock
  return {
    ...tabInfo,
    title: <ParanextTabTitle text={tabInfo.tabTitle} />,
    content: <ParanextPanel>{tabInfo.content}</ParanextPanel>,
    group: TAB_GROUP,
    closable: true,
  };
}

/**
 * Converts the tab data into saved tab information by running the tab saver provided by the
 * component file that registered this tab type
 * @param dockTabInfo the tab data to save
 * @returns saved tab info ready to be saved into the layout
 */
function saveTab(dockTabInfo: RCDockTabInfo): SavedTabInfo {
  // Remove the rc-dock properties that are not also in SavedTabInfo
  // We don't need to use the other properties, but we need to remove them
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { parent, group, closable, title, ...strippedTabInfo } = dockTabInfo;
  const tabInfo: TabInfo = strippedTabInfo;

  const tabSaver = tabSaverMap.get(tabInfo.tabType);

  return tabSaver ? tabSaver(tabInfo) : saveTabInfoBase(tabInfo);
}

/**
 * Check if the input item is just a tab, i.e. not a panel, box, or float.
 * @param tab to check.
 * @returns `true` if its a tab or `false` otherwise.
 */
function isTab(tab: PanelData | TabData | BoxData | undefined): boolean {
  if (!tab || (tab as TabData).title == null) return false;
  return true;
}

function offsetOrOverflowAxis(
  axis: number,
  size: number,
  max: number,
  offset = DOCK_FLOAT_OFFSET,
): number {
  if (axis + size + offset >= max) return offset;
  return axis + offset;
}

/**
 * Get left & top so float windows cascade their position. Float window should not overflow the
 * layout but start cascading again.
 * @param layout specified by the WebView.
 * @param previousPosition used with the previous float window.
 * @param layoutSize of the whole dock layout.
 * @returns cascaded position.
 */
export function getFloatPosition(
  layout: FloatLayout,
  previousPosition: FloatPosition,
  layoutSize: LayoutSize,
): FloatPosition {
  // Defaults are added in `web-view.service.ts`.
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { width, height } = layout.floatSize!;
  let { left, top } = previousPosition;
  left = offsetOrOverflowAxis(left, width, layoutSize.width);
  top = offsetOrOverflowAxis(top, height, layoutSize.height);
  return { left, top, width, height };
}

/** Find the previous tab if one was previously added or find the first tab otherwise */
function findPreviousTab(dockLayout: DockLayout) {
  // If we have a previous tab, try to find it
  if (previousTabId !== undefined) {
    const previousTab = dockLayout.find(previousTabId);
    // If we found the previous tab, go with that
    if (previousTab) return previousTab;
  }
  // We don't have a previous tab or we didn't find the one we thought we had. Just find the first
  // available tab
  return dockLayout.find((tabData) => isTab(tabData)) as TabData;
}

/**
 * Function to call to add or update a webview in the layout
 * @param webView web view to add or update
 * @param layout information about where to put a new webview
 * @param dockLayout The rc-dock dock layout React component ref. Used to perform operations on the
 * layout
 */
export function addWebViewToDock(webView: WebViewProps, layout: Layout, dockLayout: DockLayout) {
  const tabId = webView.id;
  const tab = loadTab({ id: tabId, tabType: TAB_TYPE_WEBVIEW, data: webView });
  let targetTab = dockLayout.find(tabId);

  // Update existing WebView
  if (targetTab) {
    dockLayout.updateTab(tabId, tab);
    if (isTab(targetTab)) previousTabId = tabId;
    return;
  }

  // Add new WebView
  const unknownLayoutType = layout.type;
  switch (layout.type) {
    case 'tab':
      targetTab = findPreviousTab(dockLayout);
      if (targetTab) {
        if (previousTabId === undefined)
          // The target tab is the first found tab, so just add this as a new panel on top
          dockLayout.dockMove(tab, targetTab.parent as PanelData, 'top');
        // The target tab is a previously added tab, so add this as a tab next to it
        else dockLayout.dockMove(tab, targetTab, 'after-tab');
      }
      // Didn't find any tabs. Add as a new tab
      else
        dockLayout.dockMove(
          tab,
          // Find the first thing (the dock box) and add the tab to it
          dockLayout.find(() => true) ?? null,
          'middle',
        );
      previousTabId = tabId;
      break;

    case 'float':
      floatPosition = getFloatPosition(layout, floatPosition, dockLayout.getLayoutSize());
      dockLayout.dockMove(tab, null, 'float', floatPosition);
      break;

    case 'panel':
      if (layout.targetTabId !== undefined) {
        // Look for a specific tab
        targetTab = dockLayout.find(layout.targetTabId);
        if (!isTab(targetTab))
          throw new LogError(`When adding a panel, unknown target tab: '${layout.targetTabId}'`);
      }
      // Didn't ask for a specific tab, so just get the previous tab and go from there
      else targetTab = findPreviousTab(dockLayout);

      dockLayout.dockMove(
        tab,
        // Add to the parent of the found tab if we found a tab
        (targetTab?.parent as PanelData) ??
          // Otherwise find the first thing (the dock box) and add the tab to it
          dockLayout.find(() => true) ??
          null,
        // Defaults are added in `web-view.service.ts`.
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        layout.direction!,
      );
      break;

    default:
      throw new LogError(`Unknown layoutType: '${unknownLayoutType}'`);
  }
}

// #endregion

export default function ParanextDockLayout() {
  // This ref will always be defined
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const dockLayoutRef = useRef<DockLayout>(null!);

  /**
   * onLayoutChange function from `web-view.service.ts` once this docklayout is registered.
   *
   * TODO: Strange pattern that we are setting a ref to a service function. Investigate changing
   * this pattern in some way. Maybe just export `onLayoutChange`?
   */
  const onLayoutChangeRef = useRef<OnLayoutChangeRCDock | undefined>();

  useEffect(() => {
    // Register with `web-view.service.ts` so it can perform operations on us
    const unsub = registerDockLayout({
      dockLayout: dockLayoutRef.current,
      onLayoutChangeRef,
      addWebViewToDock: (webView: WebViewProps, layout: Layout) =>
        addWebViewToDock(webView, layout, dockLayoutRef.current),
      testLayout,
    });
    return () => {
      unsub();
    };
    // Is there any situation where dockLayoutRef will change? We need to add to dependencies if so
  }, []);

  return (
    <>
      <PlatformBibleToolbar/>
      <DockLayout
        ref={dockLayoutRef}
        groups={groups}
        defaultLayout={{ dockbox: { mode: 'horizontal', children: [] } }}
        dropMode="edge"
        loadTab={loadTab}
        saveTab={saveTab}
        onLayoutChange={(...args) => {
          if (onLayoutChangeRef.current) onLayoutChangeRef.current(...args);
      }}
      />
    </>
  );
}
