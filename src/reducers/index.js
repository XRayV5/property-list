import { combineReducers } from 'redux';
import properties from './property';
import loadings from './loading';

const rootReducer = combineReducers({
  properties,
  loadings
});

export default rootReducer;
