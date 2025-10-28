// Import Modules
import { all, fork } from "redux-saga/effects";
import contactsSaga from "./contacts.saga";

// Package Sagas into Root Saga
export default function* rootSaga() {
  yield all([fork(contactsSaga)]);
}
