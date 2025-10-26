// Import Modules
import { all } from 'redux-saga/effects';
import usersSaga from './users.saga';

// Package Sagas into Root Saga
export default function* rootSaga() {
  yield all([
    usersSaga()
  ]);
}