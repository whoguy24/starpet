// Import Modules
import { combineReducers } from 'redux';
import users from './users.reducer';

// Package Reducers into Root Reducer
const rootReducer = combineReducers({
  users
});

// Export Root Reducer
export default rootReducer;