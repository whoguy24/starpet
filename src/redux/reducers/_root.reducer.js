// Import Modules
import { combineReducers } from 'redux';
import users from './users.reducer';
import contacts from './contacts.reducer';

// Package Reducers into Root Reducer
const rootReducer = combineReducers({
  users,
  contacts
});

// Export Root Reducer
export default rootReducer;