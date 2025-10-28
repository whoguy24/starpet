// Import Modules
import { combineReducers } from "redux";
import contacts from "./contacts.reducer";

// Package Reducers into Root Reducer
const rootReducer = combineReducers({
  contacts,
});

// Export Root Reducer
export default rootReducer;
