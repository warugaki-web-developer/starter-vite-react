import { Global, css } from '@emotion/react';
import { useState } from 'react';

import logo from './logo.svg';
import globalStyle from './styles/global';

const style = css`
  & {
    text-align: center;
  }

  .app-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .app-logo {
      animation: app-logo-spin infinite 20s linear;
    }
  }

  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
    color: white;
    background-color: #282c34;
  }

  .app-link {
    color: #61dafb;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  button {
    font-size: calc(10px + 2vmin);
  }
`;

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Global styles={globalStyle} />
      <div className="app" css={style}>
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button type="button" onClick={() => setCount(count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="app-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="app-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </>
  );
};

export default App;
