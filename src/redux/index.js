import { combineReducers } from 'redux';

import pokemon from './reducers/pokemon';

const rootReducer = combineReducers({
  pokemon,
});

export default rootReducer;
