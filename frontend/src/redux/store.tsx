import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];



export function configureStore() {
  const store = createStore(
    reducers,
    compose(composeWithDevTools(applyMiddleware(...middlewares))),
  );

  sagaMiddleware.run(sagas);

  return store;
  
}