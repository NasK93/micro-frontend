import React from 'react';
import LocalButton from './Button';
import Text from './Text';

const SharedComponentsHeader = React.lazy(() => import('sharedComponents/Header'));
const SharedComponentsFooter = React.lazy(() => import('sharedComponents/Footer'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <React.Suspense fallback="Loading Button">
      <SharedComponentsHeader fallback="Loading Header" />
      <Text text={'test'} />
      <SharedComponentsFooter fallback="Loading Footer" />
    </React.Suspense>
  </div>
);

export default App;
