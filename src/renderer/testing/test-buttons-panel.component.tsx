import './test-buttons-panel.component.css';
import { Button, TextField } from 'papi-components';
import { useCallback, useMemo, useState } from 'react';
import * as networkService from '@shared/services/network.service';
import * as commandService from '@shared/services/command.service';
import { debounce, getErrorMessage, isString } from '@shared/utils/util';
import logger from '@shared/services/logger.service';
import { SavedTabInfo, TabInfo } from '@shared/data/web-view.model';
import useEvent from '@renderer/hooks/papi-hooks/use-event.hook';
import useData from '@renderer/hooks/papi-hooks/use-data.hook';
import useDataProvider from '@renderer/hooks/papi-hooks/use-data-provider.hook';
import { PeopleDataProvider } from '@extensions/hello-someone/hello-someone';
import { QuickVerseDataTypes } from '@extensions/quick-verse/quick-verse';

export const TAB_TYPE_BUTTONS = 'buttons';

const testBase: (message: string) => Promise<string> =
  networkService.createRequestFunction('electronAPI.env.test');

const test = async () => {
  /* const start = performance.now(); */
  const result = await testBase('stuff');
  /* logger.info(`Test took ${performance.now() - start} ms`); */
  return result;
};

const addOne = async (num: number) => commandService.sendCommand<[number], number>('addOne', num);

const echo: (message: string) => Promise<string> = commandService.createSendCommandFunction<
  [string],
  string
>('echo');

const echoRenderer = commandService.createSendCommandFunction<[string], string>('echoRenderer');

const echoExtensionHost = commandService.createSendCommandFunction<[string], string>(
  'echoExtensionHost',
);

const echoSomeoneRenderer = commandService.createSendCommandFunction<[string], string>(
  'hello-someone.echo-someone-renderer',
);

const addThree = commandService.createSendCommandFunction<[number, number, number], number>(
  'addThree',
);

const addMany = commandService.createSendCommandFunction<number[], number>('addMany');

const helloWorld = commandService.createSendCommandFunction<[], string>('hello-world.hello-world');

const throwErrorHelloWorld = commandService.createSendCommandFunction<[string], string>(
  'hello-world.hello-exception',
);

const helloSomeone = commandService.createSendCommandFunction<[string], string>(
  'hello-someone.hello-someone',
);

const throwError = commandService.createSendCommandFunction<[string], string>('throwError');

const throwErrorExtensionHost = commandService.createSendCommandFunction<[string], string>(
  'throwErrorExtensionHost',
);

const executeMany = async <T,>(fn: () => Promise<T>) => {
  const numRequests = 10000;
  const requests = new Array<Promise<T | void>>(numRequests);
  const requestTime = new Array<number>(numRequests);
  const start = performance.now();
  for (let i = 0; i < numRequests; i++) {
    requestTime[i] = performance.now();
    requests[i] = fn()
      .then((response) => {
        requestTime[i] = performance.now() - requestTime[i];
        return response;
      })
      .catch(logger.error);
  }

  try {
    const responses = await Promise.all(requests);
    const finish = performance.now();

    const avgResponseTime = requestTime.reduce((sum, time) => sum + time, 0) / numRequests;
    const maxTime = requestTime.reduce((max, time) => Math.max(max, time), 0);
    const minTime = requestTime.reduce((min, time) => Math.min(min, time), Number.MAX_VALUE);
    logger.info(
      `Of ${numRequests} requests:\n\tAvg response time: ${avgResponseTime} ms\n\tMax response time: ${maxTime} ms\n\tMin response time: ${minTime}\n\tTotal time: ${
        finish - start
      }`,
    );
    logger.info(responses[responses.length - 1]);
  } catch (e) {
    logger.error(e);
  }
};

export default function TestButtonsPanel() {
  const [promiseReturn, setPromiseReturn] = useState('Click a button.');
  const updatePromiseReturn = useCallback(
    (state: unknown) => setPromiseReturn(isString(state) ? state : JSON.stringify(state)),
    [],
  );

  const [addOneResult, setAddOneResult] = useState(0);

  const runPromise = useCallback(
    async (asyncFn: () => Promise<unknown>) => {
      try {
        const result = await asyncFn();
        logger.info(result);
        updatePromiseReturn(result);
        return result;
      } catch (e) {
        logger.error(e);
        updatePromiseReturn(`Error: ${getErrorMessage(e)}`);
        return undefined;
      }
    },
    [updatePromiseReturn],
  );

  useEvent(
    networkService.onDidClientConnect,
    useCallback(
      ({ clientId, didReconnect }) => {
        const result = `Client with id ${clientId} ${didReconnect ? 're' : ''}connected!`;
        logger.info(result);
        updatePromiseReturn(result);
      },
      [updatePromiseReturn],
    ),
  );

  const [verseRef, setVerseRef] = useState<string>('JHN 11:35');
  // Displayed verse ref while debouncing the actual verse ref
  const [verseRefIntermediate, setVerseRefIntermediate] = useState<string>(verseRef);
  const setVerseRefDebounced = useMemo(
    () =>
      debounce((newVerseRef: string) => {
        setVerseRef(newVerseRef);
        setVerseRefIntermediate(newVerseRef);
      }, 250),
    [],
  );
  const updateVerseRef = useCallback(
    (newVerseRef: string) => {
      setVerseRefDebounced(newVerseRef);
      setVerseRefIntermediate(newVerseRef);
    },
    [setVerseRefDebounced],
  );

  // Test a method on a data provider engine that isn't on the interface to see if you can actually do this
  const [hasTestedRandomMethod, setHasTestedRandomMethod] = useState(false);
  const peopleDataProvider = useDataProvider<PeopleDataProvider>('hello-someone.people');
  if (!hasTestedRandomMethod && peopleDataProvider) {
    setHasTestedRandomMethod(true);
    (async () => {
      try {
        const result = await peopleDataProvider.testRandomMethod('from test buttons panel');
        logger.info(result);
      } catch (e) {
        logger.error(e);
      }

      try {
        // Test to make sure we literally can't run updates from outside the data provider
        // @ts-ignore ts(2339)
        const result = await peopleDataProvider.notifyUpdate();
        logger.error(`Remote notify update succeeded! Bad ${result}`);
      } catch (e) {
        logger.info(`Remote notify update failed! Good ${e}`);
      }
    })();
  }

  // We need to tell the useData.Verse hook what types we are using, so we get the Verse data types
  // from the quick verse data types
  const [verseText, setVerseText, verseTextIsLoading] = useData.Verse<QuickVerseDataTypes, 'Verse'>(
    'quick-verse.quick-verse',
    verseRef,
    'Verse text goes here',
  );

  return (
    <div className="buttons-panel">
      <div className="hello">
        <TextField
          label="Verse Ref"
          value={verseRefIntermediate}
          onChange={(e) => {
            updateVerseRef(e.target.value);
          }}
        />
        {verseTextIsLoading ? 'Loading verse' : 'Finished loading verse'}
        <textarea
          className="scr-verse-text-area"
          value={verseText}
          onChange={(e) => {
            if (setVerseText) setVerseText({ text: e.target.value, isHeresy: true });
          }}
        />
        <Button
          className="test-button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => echo('Echo Stuff'));
            logger.info(`command:echo '${result}' took ${performance.now() - start} ms`);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => echo('Echo Stuff'));
          }}
        >
          Echo
        </Button>
        <Button
          className="test-button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => echoRenderer('Echo Renderer Stuff'));
            logger.info(`command:echoRenderer '${result}' took ${performance.now() - start} ms`);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => echoRenderer('Echo Renderer Stuff'));
          }}
        >
          Echo Renderer
        </Button>
        <Button
          className="test-button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => echoExtensionHost('Echo Extension Host Stuff'));
            logger.info(
              `command:echoExtensionHost '${result}' took ${performance.now() - start} ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => echoExtensionHost('Echo Extension Host Stuff'));
          }}
        >
          Echo Extension Host
        </Button>
        <Button
          className="test-button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() =>
              echoSomeoneRenderer('Echo Someone Renderer Stuff'),
            );
            logger.info(
              `command:hello-someone.echo-someone-renderer '${result}' took ${
                performance.now() - start
              } ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => echoSomeoneRenderer('Echo Someone Renderer Stuff'));
          }}
        >
          Echo Someone Renderer
        </Button>
        <Button
          className="test-button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => addThree(1, 2, 3));
            logger.info(`command:addThree ${result} took ${performance.now() - start} ms`);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => addThree(1, 2, 3));
          }}
        >
          AddThree (Renderer)
        </Button>
        <Button
          className="test-button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => addMany(1, 2, 3, 4, 5, 6));
            logger.info(`command:addMany ${result} took ${performance.now() - start} ms`);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => addMany(1, 2, 3, 4, 5, 6));
          }}
        >
          AddMany (Extension Host)
        </Button>
        <Button
          className="test-button"
          onClick={() =>
            runPromise(async () => {
              const addResult = await addOne(addOneResult);
              setAddOneResult(addResult);
              return `C# addOne: ${addResult}`;
            })
          }
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => addOne(3));
          }}
        >
          AddOne (C#)
        </Button>
        <Button
          className="test-button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => helloWorld());
            logger.info(
              `command:hello-world.hello-world ${result} took ${performance.now() - start} ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => helloWorld());
          }}
        >
          Hello World (Extension)
        </Button>
        <Button
          className="test-button"
          onClick={async () => {
            const start = performance.now();
            const result = await runPromise(() => helloSomeone('Paranext user'));
            logger.info(
              `command:hello-someone.hello-someone ${result} took ${performance.now() - start} ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => helloSomeone('Paranext user'));
          }}
        >
          Hello Someone (Extension)
        </Button>
        <Button className="test-button" onClick={() => runPromise(() => throwError('Test error'))}>
          Test Exception
        </Button>
        <Button
          className="test-button"
          onClick={() => runPromise(() => throwErrorExtensionHost('Test error'))}
        >
          Test Exception (Extension Host)
        </Button>
        <Button
          className="test-button"
          onClick={() => runPromise(() => throwErrorHelloWorld('Test error'))}
        >
          Test Exception (Hello World)
        </Button>
        <Button
          className="test-button"
          onClick={() => runPromise(() => test())}
          onContextMenu={() => {
            executeMany(test);
          }}
        >
          Test
        </Button>
      </div>
      <div className="hello">
        <div>{promiseReturn}</div>
      </div>
    </div>
  );
}

export function loadButtonsTab(savedTabInfo: SavedTabInfo): TabInfo {
  return {
    ...savedTabInfo,
    tabTitle: 'Test Buttons',
    content: <TestButtonsPanel />,
  };
}
