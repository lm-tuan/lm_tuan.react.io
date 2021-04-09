import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'connected-react-router';
// import logger from 'redux-logger';

import reducer from './rootReducer';
import rootSaga from './rootSaga';

// import { history } from '../utils/history';

const composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer(),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
console.log('store', store);
sagaMiddleware.run(rootSaga);
export default store;
