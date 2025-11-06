// Import Modules
import {
  takeLatest,
  call,
  fork,
  take,
  select,
  cancel,
} from "redux-saga/effects";
import {
  firestoreCreateDocument,
  firestoreUpdateDocument,
  firestoreDeleteDocument,
} from "../../firebase/firestore";
import { subscribeToCollection } from "../../firebase/listeners";

// READ / FETCH (Initialize Firestore Listener)
export function* animalsListener() {
  while (true) {
    const { status } = yield select((state) => state.auth);
    if (status === "AUTHENTICATED") {
      const task = yield fork(
        subscribeToCollection,
        "animals",
        "LOAD_ANIMALS"
      );
      yield take("AUTH_CLEAR");
      yield cancel(task);
    } else {
      yield take(["AUTH_LOAD", "AUTH_ERROR"]);
    }
  }
}

// CREATE
function* createContact(action) {
  const { first_name, last_name, email, phone } = action.payload;
  const contact = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    //   address: {
    //     street: "",
    //     unit: "",
    //     po_box: "",
    //     city: "",
    //     state: "",
    //     zip_code: "",
    //   },
    active: true,
  };
  try {
    const contactID = yield call(firestoreCreateDocument, "contacts", contact);
    console.log("Created Contact: ", contactID);
    return contactID;
  } catch (error) {
    console.log("Error creating document: ", error);
    throw error;
  }
}

// UPDATE
function* updateContact(action) {
  try {
    // Don't update ID, date_created, these should be immutable
    const { id, date_created, ...data } = action.payload;
    const contactID = yield call(firestoreUpdateDocument, "contacts", id, data);
    console.log("Updated Contact: ", contactID);
    return contactID;
  } catch (error) {
    console.log("Error updating document: ", error);
    throw error;
  }
}

// DELETE
function* deleteContact(action) {
  const { id } = action.payload;
  try {
    const contactID = yield call(firestoreDeleteDocument, "contacts", id);
    console.log("Deleted Contact: ", contactID);
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
