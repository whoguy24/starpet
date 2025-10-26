// Import Modules
import { put, takeLatest, call } from 'redux-saga/effects';
import { firestoreFetchUsers } from '../../firebase/firestore';

// Fetch Users Collection Request
function* fetchUsers(action) {
  try {
      const users = yield call(firestoreFetchUsers);
      yield put({ type: 'LOAD_USERS', payload: users });
  } catch(err) {
      console.error('ERROR:', err);
  };
};

// Combine Saga Functions
function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
};

// Export Module
export default usersSaga;