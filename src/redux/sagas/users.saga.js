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
import {
  firestoreCreateDocument,
  firestoreUpdateDocument,
  firestoreDeleteDocument,
} from "../../firebase/firestore";
import { createChannel } from "../../firebase/listeners";

// READ / FETCH (Initialize Firestore Listener)
export function* usersListener() {
  while (true) {
    const { status } = yield select((state) => state.auth);
    if (status === "AUTHENTICATED") {
      const channel = yield call(createChannel, "users");
      const subscribeUsers = yield fork(function* () {
        try {
          while (true) {
            const users = yield take(channel);
            yield put({ type: "LOAD_USERS", payload: users });
          }
        } finally {
          if (yield cancelled()) {
            channel.close();
          }
        }
      });
      yield take("AUTH_CLEAR");
      yield cancel(subscribeUsers);
    } else {
      yield take(["AUTH_LOAD", "AUTH_ERROR"]);
    }
  }
}

// CREATE
function* createUser(action) {
  const { authUserID, first_name, last_name, email, role } = action.payload;
  try {
    // const contactID = yield call(firestoreCreateDocument, "contacts", {
    //   first_name: first_name,
    //   last_name: last_name,
    //   email: email,
    //   active: true,
    //   // Placeholders, for now
    //   phone: "temp",
    //   address: {
    //     street: "temp",
    //     unit: "temp",
    //     po_box: "temp",
    //     city: "temp",
    //     state: "temp",
    //     zip_code: "temp",
    //   },
    // });
    // const userID = yield call(firestoreCreateDocument, "users", {
    //   authUserID: authUserID,
    //   contactID: contactID,
    //   email: email,
    //   display_name: `${first_name} ${last_name}`,
    //   role: role,
    //   active: true,
    // });
    // console.log("Successfully created document:", userID);
    // return userID;
  } catch (error) {
    console.log("Error creating document: ", error);
    throw error;
  }
}

// UPDATE
function* updateUser(action) {
  try {
    const { id, date_created, ...data } = action.payload;
    yield call(firestoreUpdateDocument, "users", id, data);
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
