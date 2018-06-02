import { combineReducers } from 'redux';
import JeezyReducer from './reducer_jeezy';

const rootReducer = combineReducers({
  jeezy: JeezyReducer
});

export default rootReducer;
