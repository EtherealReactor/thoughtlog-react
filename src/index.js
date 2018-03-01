import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import userReducer from './User/UserReducer';
import createSagaMiddleware from 'redux-saga'
import IndexSagas from './IndexSagas';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import signinReducer from './User/Signin/SigninReducer';
import signupReducer from './User/Signup/SignupReducer';
import thoughtsReducer from './Thoughts/ThoughtReducer';
import notificationReducer from './Notifications/NotificationReducer';
import attachmentReducer from './Attachments/AttachmentReducer';

const history = createHistory();


const rootReducer = combineReducers({
  form: formReducer,
  signup: signupReducer,
  signin: signinReducer,
  entities: thoughtsReducer,
  notification: notificationReducer,
  router: routerReducer,
  attachments: attachmentReducer
});

const sagaMiddleware = createSagaMiddleware();
const routerMware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, routerMware)));

sagaMiddleware.run(IndexSagas)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
