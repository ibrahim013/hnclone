import { combineReducers } from 'redux';
import latestPostReducer from './latestPostReducer';
import nextPostReducer from './nextPostReducer'

const rootReducer = combineReducers({
  post: latestPostReducer,
  nextPost: nextPostReducer
 });

export default rootReducer;