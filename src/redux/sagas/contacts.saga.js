// Import Modules
import {
  put,
  takeLatest,
  call,
  fork,
  take,
  select,
  cancel,
  cancelled,
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import {
  firestoreListener,
  firestoreCreateDocument,
  firestoreUpdateDocument,
  firestoreDeleteDocument,
} from "../../firebase/firestore";

// Initialize Listener
function* contactsListener() {
  while (true) {
    const { currentUser } = yield select((state) => state.auth);
    if (currentUser) {
      const channel = yield call(() =>
        eventChannel((emit) => {
          const unsubscribe = firestoreListener("contacts", emit);
          return () => unsubscribe();
        })
      );
      let lastIds = new Set();
      const listenerTask = yield fork(function* () {
        try {
          while (true) {
            const contacts = yield take(channel);
            const ids = new Set(contacts.map((c) => c.id));
            if (
              ![...ids].every((id) => lastIds.has(id)) ||
              ids.size !== lastIds.size
            ) {
              yield put({ type: "LOAD_CONTACTS", payload: contacts });
              lastIds = ids;
            }
          }
        } finally {
          if (yield cancelled()) {
            channel.close();
          }
        }
      });
      yield take("AUTH_CLEAR");
      yield cancel(listenerTask);
    } else {
      yield take("AUTH_LOAD");
    }
  }
}

// Create Document
function* createContact(action) {
  try {
    const contactID = yield call(
      firestoreCreateDocument,
      "contacts",
      action.payload
    );
    return contactID;
  } catch (error) {
    console.log("Error creating document: ", error);
    throw error;
  }
}

// Update Document
function* updateContact(action) {
  try {
    const { id, date_created, ...data } = action.payload;
    yield call(firestoreUpdateDocument, "contacts", id, data);
  } catch (error) {
    console.log("Error updating document: ", error);
    throw error;
  }
}

// Delete Document
function* deleteContact(action) {
  try {
    yield call(firestoreDeleteDocument, "contacts", action.payload.id);
  } catch (error) {
    console.log("Error deleting document: ", error);
    throw error;
  }
}

// Combine Saga Functions
function* contactsSaga() {
  yield fork(contactsListener);
  yield takeLatest("CREATE_CONTACT", createContact);
  yield takeLatest("UPDATE_CONTACT", updateContact);
  yield takeLatest("DELETE_CONTACT", deleteContact);
}

// Export Module
export default contactsSaga;
