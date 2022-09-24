import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Helmet from 'react-helmet';
import Logo from './assets/logo.svg';
const Main = lazy(() => import('./components/Main/index'));
const Loading = lazy(() => import('./components/Loading/index'));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Helmet>
      <meta
        name="description"
        content="Portfolio Andres Logares"
      />
      <meta
        name="keywords"
        content="Developer, React"
      />
      <meta
        property="og:title"
        content="Andres Logares"
      />
      <meta
        property="og:description"
        content="Portfolio Andres Logares"
      />
      <meta
        property="og:image"
        content={Logo}
      />
      <meta
        property="og:locale"
        content="en_US"
      />
      <meta
        property="og:url"
        content="https://andreslogares.netlify.app/"
      />
    </Helmet>
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  </React.StrictMode>,
);
