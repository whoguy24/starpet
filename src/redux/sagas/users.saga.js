// Import Modules
import {
  put,
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
import { register } from "../../firebase/auth.js";

// READ / FETCH (Initialize Firestore Listener)
export function* usersListener() {
  while (true) {
    const { status } = yield select((state) => state.auth);
    if (status === "AUTHENTICATED") {
      const task = yield fork(subscribeToCollection, "users", "LOAD_USERS");
      yield take("AUTH_CLEAR");
      yield cancel(task);
    } else {
      yield take(["AUTH_LOAD", "AUTH_ERROR"]);
    }
  }
}

// CREATE
function* createUser(action) {
  const { first_name, last_name, email, password } = action.payload;
  try {
    const authUser = yield call(register, email, password);
    const firebaseID = authUser.user.uid;
    const userID = yield call(firestoreCreateDocument, "users", {
      firebase_ID: firebaseID,
      account: email,
      first_name: first_name,
      last_name: last_name,
      role: "User",
      active: true,
    });
    console.log("Created User:", userID);
    return userID;
  } catch (error) {
    console.log("Error creating document: ", error);
    throw error;
  }
}

// UPDATE
function* updateUser(action) {
  try {
    // Don't update ID, date_created, these should be immutable
    const { id, date_created, ...data } = action.payload;
    const userID = yield call(firestoreUpdateDocument, "users", id, data);
    console.log("Updated User: ", userID);
    return userID;
  } catch (error) {
    console.log("Error updating document: ", error);
    throw error;
  }
}

// DELETE
function* deleteUser(action) {
  try {
    yield call(firestoreDeleteDocument, "users", action.payload.id);
  } catch (error) {
    console.log("Error deleting document: ", error);
    throw error;
  }
}

// Combine Saga Functions
function* userSaga() {
  yield fork(usersListener);
  yield takeLatest("CREATE_USER", createUser);
  yield takeLatest("UPDATE_USER", updateUser);
  yield takeLatest("DELETE_USER", deleteUser);
}

// Export Module
export default userSaga;
