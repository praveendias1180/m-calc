import { combineReducers } from 'redux';
import variablesReducer from './variables';
import siteReducer from './site';

export default combineReducers({
  variables: variablesReducer,
  site: siteReducer,
});
