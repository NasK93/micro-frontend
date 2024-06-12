import React from 'react';
import Text from './Text';
import HostComponent from './HostComponent';

const RemoteButton = React.lazy(() => import('remote/Button'));
const SharedComponentsHeader = React.lazy(() => import('sharedComponents/Header'));
const SharedComponentsFooter = React.lazy(() => import('sharedComponents/Footer'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <HostComponent />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
      <SharedComponentsHeader fallback="Loading Header" />
      <Text text={'test'} />
      <SharedComponentsFooter fallback="Loading Footer" />
    </React.Suspense>
  </div>
);

export default App;
