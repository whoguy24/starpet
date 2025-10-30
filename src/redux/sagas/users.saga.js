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
  debounce,
} from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import {
  firestoreListener,
  firestoreCreateDocument,
  firestoreUpdateDocument,
  firestoreDeleteDocument,
} from "../../firebase/firestore";

import { logout } from "../../firebase/auth.js";

// Initialize Listener
function* usersListener() {
  while (true) {
    const { currentUser } = yield select((state) => state.auth);
    if (currentUser) {
      const channel = yield call(() =>
        eventChannel((emit) => {
          const unsubscribe = firestoreListener("users", emit);
          return () => unsubscribe();
        })
      );
      let lastIds = new Set();
      const listenerTask = yield fork(function* () {
        try {
          while (true) {
            const users = yield take(channel);
            const ids = new Set(users.map((c) => c.id));
            if (
              ![...ids].every((id) => lastIds.has(id)) ||
              ids.size !== lastIds.size
            ) {
              yield put({ type: "LOAD_USERS", payload: users });
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

// // Create User
function* createUser(action) {
  const { authUserID, first_name, last_name, email, role } = action.payload;
  try {
    const contactID = yield call(firestoreCreateDocument, "contacts", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      active: true,
      // Placeholders, for now
      phone: "temp",
      address: {
        street: "temp",
        unit: "temp",
        po_box: "temp",
        city: "temp",
        state: "temp",
        zip_code: "temp",
      },
    });
    const userID = yield call(firestoreCreateDocument, "users", {
      authUserID: authUserID,
      contactID: contactID,
      email: email,
      display_name: `${first_name} ${last_name}`,
      role: role,
      active: true,
    });
    console.log("Successfully created document:", userID);
    return userID;
  } catch (error) {
    console.log("Error creating document: ", error);
    throw error;
  }
}

// // Update User
function* updateUser(action) {
  try {
    const { id, date_created, ...data } = action.payload;
    yield call(firestoreUpdateDocument, "users", id, data);
  } catch (error) {
    console.log("Error updating document: ", error);
    throw error;
  }
}

// // Delete User
function* deleteUser(action) {
  try {
    yield call(firestoreDeleteDocument, "users", action.payload.id);
  } catch (error) {
    console.log("Error deleting document: ", error);
    throw error;
  }
}

// // Combine Saga Functions
function* userSaga() {
  yield fork(usersListener);
  yield takeLatest("CREATE_USER", createUser);
  yield takeLatest("UPDATE_USER", updateUser);
  yield takeLatest("DELETE_USER", deleteUser);
}

// Export Module
export default userSaga;
