// Import Modules
import { put, takeLatest, call } from 'redux-saga/effects';
import { firestoreFetchUsers, firestoreCreateUser } from '../../firebase/users';

// Fetch Collection Request
function* fetchUsers(action) {
  try {
      const users = yield call(firestoreFetchUsers);
      yield put({ type: 'LOAD_USERS', payload: users });
  } catch(err) {
      console.error('ERROR:', err);
  };
};

// Create User Request
function* createUser(action) {
  try {

    const object = action.payload;

    const user = { email: object.email };
    const contact = { first_name: object.first_name, last_name: object.last_name };

    console.log(user, contact);

    yield call(firestoreCreateUser, user, contact);








  } catch (error) {
    console.error("Error creating document:", error);
  }
}

// Combine Saga Functions
function* usersSaga() {
  yield takeLatest('FETCH_USERS', fetchUsers);
  yield takeLatest('CREATE_USER', createUser);
};

// Export Module
export default usersSaga;