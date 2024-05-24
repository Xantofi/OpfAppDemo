import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { UiLoader } from '@absis-components/react';
import App from './App';
import { ClientsProvider } from './common/context/ClientsProvider';

const ClientListPage = React.lazy(() =>
  import('./pages/ClientListPage/ClientListPage')
);

const FormPage = React.lazy(() => import('./pages/FormPage/FormPage'));

const routes = () => (
  <ClientsProvider>
    <Router basename={process.env.PUBLIC_URL || '/OpfAppDemo'}>
      <div>
        <Suspense fallback={<UiLoader size="lg" loaderText="cargando..." />}>
          <Route exact path="/" component={App} />
          <Switch>
            <Route exact path="/listado">
              <ClientListPage />
            </Route>
            <Route exact path="/formulario">
              <FormPage />
            </Route>
            <Route exact path="/formulario/:id">
              <FormPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  </ClientsProvider>
);

export default routes;
