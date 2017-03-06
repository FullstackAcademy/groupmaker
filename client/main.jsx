import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Store and actions
import store from './store';

// Components
import AppContainer from './containers/AppContainer';
import Form from './components/Form';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/form" />
        <Route path="/form" component={Form} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
