// Import Modules
import { all } from 'redux-saga/effects';
import usersSaga from './users.saga';
import contactsSaga from './contacts.saga';

// Package Sagas into Root Saga
export default function* rootSaga() {
  yield all([
    usersSaga(),
    contactsSaga()
  ]);
};