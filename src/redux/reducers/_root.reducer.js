// Import Modules
import { combineReducers } from "redux";
import auth from "./auth.reducer";
import contacts from "./contacts.reducer";
import users from "./users.reducer";

// Package Reducers into Root Reducer
const rootReducer = combineReducers({
  auth,
  contacts,
  users,
});

// Export Root Reducer
export default rootReducer;
