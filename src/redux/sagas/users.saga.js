import { put, takeLatest, call } from 'redux-saga/effects';

// import { select } from 'redux-saga/effects';
// import { serverStore } from '../reducers/server.reducer.js'

// Define template payload for testing purposes

import { firestoreFetchUsers } from '../../firebase/firestore';

function* fetchUsers(action) {

    try {

        const users = yield call(firestoreFetchUsers);


        yield put({ type: 'LOAD_USERS', payload: users });


    } catch(err) {
        console.error('ERROR:', err)
    }
  }

function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

export default usersSaga;