import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const Main = lazy(() => import('./components/Main/index'));
const Loading = lazy(() => import('./components/Loading/index'));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  </React.StrictMode>,
);
