import papi from 'papi';
import { Button } from 'papi-components';
import { useCallback, useContext, useState } from 'react';

const {
  react: {
    context: { TestContext },
    hooks: { useData, usePromise },
  },
  logger,
} = papi;

const NAME = 'Hello World React WebView';

// Test fetching
papi
  .fetch('https://bible-api.com/matthew+24:14')
  .then((res) => res.json())
  .then((scr) => logger.info(scr.text.replace(/\\n/g, '')))
  .catch((e) => logger.error(`Could not get Scripture from bible-api! Reason: ${e}`));

globalThis.webViewComponent = function HelloWorld() {
  const test = useContext(TestContext) || "Context didn't work!! :(";

  const [myState, setMyState] = useState(0);

  const [echoResult] = usePromise(
    useCallback(async () => {
      // Not using the promise's resolved value
      // eslint-disable-next-line no-promise-executor-return
      await new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));
      return papi.commands.sendCommand<[string], string>('echoRenderer', `From ${NAME}`);
    }, []),
    'retrieving',
  );

  const [latestVerseText] = useData(
    'quick-verse.quick-verse',
    'latest',
    'Loading latest Scripture text...',
  );

  return (
    <div>
      <div className="title">
        Hello World <span className="framework">React</span>
      </div>
      <div>
        <Button
          onClick={() => {
            logger.info(`${NAME} Button clicked!`);
            setMyState((myStateCurrent) => myStateCurrent + 1);
            papi
              .fetch('https://bible-api.com/matthew+24:14')
              .then((res) => res.json())
              .then((scr) => logger.info(`Got it! ${scr.text.replace(/\\n/g, '')}`))
              .catch((e) => logger.error(`Could not get Scripture from bible-api! Reason: ${e}`));
          }}
        >
          Hello World Button {myState}
        </Button>
      </div>
      <div>{test}</div>
      <div>{echoResult}</div>
      <div>
        <Button
          onClick={() => {
            throw new Error(`${NAME} test exception!`);
          }}
        >
          Throw test exception
        </Button>
      </div>
      <div>{latestVerseText}</div>
    </div>
  );
};
