 import { combineReducers } from 'redux';
 import {instagramReducer} from './instagramReducer'

 export default combineReducers({
   pictures: instagramReducer,
 });
