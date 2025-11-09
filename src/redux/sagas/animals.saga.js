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
      const task = yield fork(subscribeToCollection, "animals", "LOAD_ANIMALS");
      yield take("AUTH_CLEAR");
      yield cancel(task);
    } else {
      yield take(["AUTH_LOAD", "AUTH_ERROR"]);
    }
  }
}

// CREATE
function* createAnimal(action) {
  try {
    const animalID = yield call(
      firestoreCreateDocument,
      "animals",
      action.payload
    );
    console.log("Created Animal: ", animalID);
    return animalID;
  } catch (error) {
    console.log("Error creating document: ", error);
    throw error;
  }
}

// UPDATE
function* updateAnimal(action) {
  try {
    // Don't update ID, date_created, these should be immutable
    const { id, date_created, ...data } = action.payload;
    const animalID = yield call(firestoreUpdateDocument, "animals", id, data);
    console.log("Updated Animal: ", animalID);
    return animalID;
  } catch (error) {
    console.log("Error updating document: ", error);
    throw error;
  }
}

// DELETE
function* deleteAnimal(action) {
  const { id } = action.payload;
  try {
    const animalID = yield call(firestoreDeleteDocument, "animals", id);
    console.log("Deleted Animal: ", animalID);
  } catch (error) {
    console.log("Error deleting document: ", error);
    throw error;
  }
}

// Combine Saga Functions
function* animalsSaga() {
  yield fork(animalsListener);
  yield takeLatest("CREATE_ANIMAL", createAnimal);
  yield takeLatest("UPDATE_ANIMAL", updateAnimal);
  yield takeLatest("DELETE_ANIMAL", deleteAnimal);
}

// Export Module
export default animalsSaga;
