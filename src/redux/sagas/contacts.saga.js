// Import Modules
import { put, takeLatest, call, fork, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import {
  firestoreListener,
  firestoreCreateDocument,
  firestoreUpdateDocument,
  firestoreDeleteDocument,
} from "../../firebase/firestore";

// Action types
const CREATE_CONTACT = "CREATE_CONTACT";
const CREATE_CONTACT_SUCCESS = "CREATE_CONTACT_SUCCESS";
const CREATE_CONTACT_FAILURE = "CREATE_CONTACT_FAILURE";

const UPDATE_CONTACT = "UPDATE_CONTACT";
const UPDATE_CONTACT_SUCCESS = "UPDATE_CONTACT_SUCCESS";
const UPDATE_CONTACT_FAILURE = "UPDATE_CONTACT_FAILURE";

const DELETE_CONTACT = "DELETE_CONTACT";
const DELETE_CONTACT_SUCCESS = "DELETE_CONTACT_SUCCESS";
const DELETE_CONTACT_FAILURE = "DELETE_CONTACT_FAILURE";

// Create Listener Channel
function createContactsChannel() {
  return eventChannel((emit) => {
    const unsubscribe = firestoreListener("contacts", emit);
    return () => unsubscribe();
  });
}

// Initialize Listener
function* contactsListener() {
  const channel = yield call(createContactsChannel);
  try {
    while (true) {
      const contacts = yield take(channel);
      yield put({ type: "FETCH_CONTACTS_SUCCESS", payload: contacts });
    }
  } finally {
    channel.close();
  }
}

// Create contact
function* createContact(action) {
  try {
    const id = yield call(firestoreCreateDocument, "contacts", action.payload);
    yield put({
      type: CREATE_CONTACT_SUCCESS,
      payload: { id: id, ...action.payload },
    });
  } catch (error) {
    console.log("Fail");
    yield put({ type: CREATE_CONTACT_FAILURE, payload: error.message });
  }
}

// Update contact
function* updateContact(action) {
  try {
    const { id, date_created, ...data } = action.payload;
    yield call(firestoreUpdateDocument, "contacts", id, data);
    yield put({ type: UPDATE_CONTACT_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: UPDATE_CONTACT_FAILURE, payload: error.message });
  }
}

// Delete contact
function* deleteContact(action) {
  try {
    yield call(firestoreDeleteDocument, "contacts", action.payload.id);
    yield put({ type: DELETE_CONTACT_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_CONTACT_FAILURE, payload: error.message });
  }
}

// Combine Saga Functions
function* contactsSaga() {
  yield fork(contactsListener);
  yield takeLatest(CREATE_CONTACT, createContact);
  yield takeLatest(UPDATE_CONTACT, updateContact);
  yield takeLatest(DELETE_CONTACT, deleteContact);
}

// Export Module
export default contactsSaga;
