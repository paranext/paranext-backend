import { WebViewProps } from '@papi/core';
import { Button, Label, ResultsSet, ScriptureResultsViewer } from 'platform-bible-react';
import { useState, useCallback, useEffect, useMemo } from 'react';
import { badLeftoversCheck, engineProblemsCheck } from './testing/test-scripture-checks';

const getLabel = (
  projectName: string | undefined,
  datetime: string | undefined,
  sources: ResultsSet[],
): string => {
  let result = '';
  if (projectName) {
    result = projectName;
  }
  if (datetime) result += `; ${datetime}`;
  if (sources.length > 0) {
    result += '; ';
    result += sources
      .map((s) => s.source.displayName)
      .filter(Boolean)
      .join(', ');
  }
  return result;
};

global.webViewComponent = function CheckingResultsListWebView({ useWebViewState }: WebViewProps) {
  const [projectName] = useWebViewState('projectName', 'Dummy project');

  // This is stub code to get some dummy checking results.
  // TODO (#994): Replace this with calls to get actual check results and subscribe to updates.
  const onRerun = useCallback(() => {
    badLeftoversCheck.reRun();
    engineProblemsCheck.reRun();
  }, []);

  const sources = useMemo(() => [badLeftoversCheck, engineProblemsCheck], []);

  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState<string | undefined>(undefined);
  const [currentSources, setCurrentSources] = useState(sources);

  useEffect(() => {
    setCurrentSources(sources);
  }, [sources]);

  const handleResultsUpdated = useCallback(() => {
    const currentTimestamp = new Date().toLocaleString();
    setLastUpdateTimestamp(currentTimestamp);
  }, []);

  const reRunChecks = useCallback(() => {
    if (onRerun) {
      onRerun();
      // Since onRerun modifies the sources directly, we need to trigger a state update
      setCurrentSources([...sources]);
      handleResultsUpdated();
    }
  }, [onRerun, sources, handleResultsUpdated]);

  const label = getLabel(projectName, lastUpdateTimestamp, sources);

  return (
    <div className="checking-results-list">
      <Button onClick={reRunChecks}>Rerun</Button>
      {label && <Label className="checking-results-list-label">{label}</Label>}
      <ScriptureResultsViewer sources={currentSources} />
    </div>
  );
};