// Import Modules
import { put, takeLatest, call } from 'redux-saga/effects';
import { firestoreFetchContacts, firestoreCreateContact } from '../../firebase/firestore';

// Fetch Collection Request
function* fetchContacts(action) {
  try {
      const contacts = yield call(firestoreFetchContacts);
      yield put({ type: 'LOAD_CONTACTS', payload: contacts });
  } catch(err) {
      console.error('ERROR:', err);
  };
};

// Create Document Request
function* createContact(action) {
  try {
    yield call(firestoreCreateContact, action.payload);
  } catch (error) {
    console.error("Error creating document:", error);
  }
}

// Combine Saga Functions
function* contactsSaga() {
  yield takeLatest('FETCH_CONTACTS', fetchContacts);
  yield takeLatest('CREATE_CONTACT', createContact);
};

// Export Module
export default contactsSaga;