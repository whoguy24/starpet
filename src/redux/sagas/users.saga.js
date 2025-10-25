import { put, takeLatest } from 'redux-saga/effects';

// import { select } from 'redux-saga/effects';
// import { serverStore } from '../reducers/server.reducer.js'

// Define template payload for testing purposes
const response = [];

function* fetchUsers(action) {
    try {
        yield put({ type: 'LOAD_USERS', payload: response });
        console.log("TODO: Fetch Users");
    } catch(err) {
        console.error('ERROR:', err)
    }
  }

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;