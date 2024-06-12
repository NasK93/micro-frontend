import React from 'react';
import LocalButton from './Button';

const SharedComponentsHeader = React.lazy(() => import('sharedComponents/Header'));
const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Button">
      <SharedComponentsHeader fallback="Loading Header" />
    </React.Suspense>
  </div>
);

export default App;
