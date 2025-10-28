// Import Modules
import { combineReducers } from "redux";
import contacts from "./contacts.reducer";
import users from "./users.reducer";

// Package Reducers into Root Reducer
const rootReducer = combineReducers({
  contacts,
  users,
});

// Export Root Reducer
export default rootReducer;
