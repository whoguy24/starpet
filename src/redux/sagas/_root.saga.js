// Import Modules
import { all, fork } from "redux-saga/effects";
import authSaga from "./auth.saga";
import animalsSaga from "./animals.saga";
import contactsSaga from "./contacts.saga";
import usersSaga from "./users.saga";

// Package Sagas into Root Saga
export default function* rootSaga() {
  yield all([
    fork(authSaga), 
    fork(animalsSaga), 
    fork(contactsSaga), 
    fork(usersSaga),
  ]);
}
