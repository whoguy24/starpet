// Import Modules
import { combineReducers } from "redux";
import auth from "./auth.reducer";
import animals from "./animals.reducer";
import contacts from "./contacts.reducer";
import users from "./users.reducer";

// Package Reducers into Root Reducer
const rootReducer = combineReducers({
  auth,
  animals,
  contacts,
  users,
});

// Export Root Reducer
export default rootReducer;
