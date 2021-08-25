import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../redux';

export default function configureStore(initialState = {}) {
  const middleWareToApply = [thunkMiddleware];

  const enhancedComposed = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhanceCreateStore = enhancedComposed(applyMiddleware(...middleWareToApply))(
    createStore,
  );

  const store = enhanceCreateStore(rootReducer, initialState);

  return store;
}
