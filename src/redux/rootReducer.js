import { combineReducers } from 'redux';
import latestPostReducer from './latestPostReducer';

const rootReducer = combineReducers({
  post: latestPostReducer
 });

export default rootReducer;