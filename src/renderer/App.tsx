import { useCallback, useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import * as NetworkService from '@shared/services/NetworkService';
import icon from '@assets/icon.png';
import './App.css';
import papi from '@shared/services/papi';
import usePromise from './hooks/usePromise';

const getVar: (envVar: string) => Promise<string> =
  NetworkService.createRequestFunction('electronAPI.env.getVar');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const invoke: (classMethod: string, args: unknown) => Promise<any> =
  NetworkService.createRequestFunction('electronAPI.edge.invoke');

const testBase: () => Promise<string> = NetworkService.createRequestFunction(
  'electronAPI.env.test',
);

const test = async () => {
  /* const start = performance.now(); */
  const result = await testBase();
  /* console.log(`Test took ${performance.now() - start} ms`); */
  return result;
};

const echo = async (message: string) => {
  const result = await papi.commands.sendCommand<[string], string>(
    'echo',
    message,
  );
  return result;
};

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
      .catch((err) => console.error(err));
  }

  try {
    const responses = await Promise.all(requests);
    const finish = performance.now();

    const avgResponseTime =
      requestTime.reduce((sum, time) => sum + time, 0) / numRequests;
    const maxTime = requestTime.reduce((max, time) => Math.max(max, time), 0);
    const minTime = requestTime.reduce(
      (min, time) => Math.min(min, time),
      Number.MAX_VALUE,
    );
    console.log(
      `Of ${numRequests} requests:\n\tAvg response time: ${avgResponseTime} ms\n\tMax response time: ${maxTime} ms\n\tMin response time: ${minTime}\n\tTotal time: ${
        finish - start
      }\n\tResponse times:`,
      requestTime,
    );
    console.log(responses[responses.length - 1]);
  } catch (e) {
    console.error(e);
  }
};

const Hello = () => {
  const [edgeReturn, setEdgeReturn] = useState('');

  const [EDGE_USE_CORECLR] = usePromise(
    useCallback(() => getVar('EDGE_USE_CORECLR'), []),
    'retrieving',
  );

  const [EDGE_APP_ROOT] = usePromise(
    useCallback(() => getVar('EDGE_APP_ROOT'), []),
    'retrieving',
  );

  const [EDGE_BOOTSTRAP_DIR] = usePromise(
    useCallback(() => getVar('EDGE_BOOTSTRAP_DIR'), []),
    'retrieving',
  );

  const edgeInvoke = useCallback(
    (name: string) => {
      return invoke(name, 'Node!')
        .then((result) => {
          console.log(result);
          setEdgeReturn(result);
          return result;
        })
        .catch((e) => {
          console.error(e);
          console.error('TEST!');
          setEdgeReturn(e.message);
          return undefined;
        });
    },
    [setEdgeReturn],
  );

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <div className="Hello">
        <h1>Paranext</h1>
      </div>
      <div className="Hello">
        <button
          type="button"
          onClick={() => edgeInvoke('EdgeMethods.UseDynamicInput')}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => edgeInvoke('EdgeMethods.UseDynamicInput'));
          }}
        >
          Test Edge Input
        </button>
        <button
          type="button"
          onClick={() => edgeInvoke('EdgeMethods.ThrowException')}
        >
          Test Edge Exception
        </button>
        <button
          type="button"
          onClick={() => {
            test()
              .then((result) => {
                console.log(result);
                setEdgeReturn(result);
                return undefined;
              })
              .catch((e) => {
                console.error(e);
                setEdgeReturn(e.message);
                return undefined;
              });
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(test);
          }}
        >
          Test
        </button>
        <button
          type="button"
          onClick={async () => {
            const start = performance.now();
            const result = await echo('Stuff');
            console.log(
              `command:echo '${result}' took ${performance.now() - start} ms`,
            );
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            executeMany(() => echo('Stuff'));
          }}
        >
          Echo
        </button>
      </div>
      <div className="Hello">
        <div>EDGE_USE_CORECLR: {EDGE_USE_CORECLR}</div>
        <div>EDGE_APP_ROOT: {EDGE_APP_ROOT}</div>
        <div>EDGE_BOOTSTRAP_DIR: {EDGE_BOOTSTRAP_DIR}</div>
        <div>{edgeReturn}</div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
