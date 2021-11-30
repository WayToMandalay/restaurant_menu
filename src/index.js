import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import RestoService from './services/resto-service';
import RestoServiceContext from './components/resto-service-context';

const restoService = new RestoService();

ReactDOM.render(
  
  <Provider store={store}>
    <ErrorBoundry>
      <RestoServiceContext.Provider value={restoService}>
        <Router>
          <App></App>
        </Router>
      </RestoServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
  
);

