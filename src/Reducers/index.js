import { combineReducers } from 'redux';
import taskReducer from './TaskReducer.js';
import taskGroupReducer from './TaskGroupReducer.js';
import mainViewReducer from './MainViewReducer.js';


export default combineReducers({
  taskReducer, taskGroupReducer, mainViewReducer
})
