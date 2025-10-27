// Import Modules
import { put, takeLatest, call } from 'redux-saga/effects';
import { firestoreFetchContacts } from '../../firebase/contacts';

// Fetch Users Collection Request
function* fetchContacts(action) {
  try {
      const contacts = yield call(firestoreFetchContacts);
      console.log(contacts)
      yield put({ type: 'LOAD_CONTACTS', payload: contacts });
  } catch(err) {
      console.error('ERROR:', err);
  };
};

// Combine Saga Functions
function* contactsSaga() {
  yield takeLatest('FETCH_CONTACTS', fetchContacts);
};

// Export Module
export default contactsSaga;