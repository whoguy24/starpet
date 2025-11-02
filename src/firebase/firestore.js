// Import Modules
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";
import { db } from "./config";
import serializeTimestamp from "./timestamp";

// FETCH / LISTEN
export function firestoreListener(collectionName, callback) {
  const collectionReference = collection(db, collectionName);
  const unsubscribe = onSnapshot(collectionReference, (snapshot) => {
    const result = snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        ...data,
        date_created: data.date_created
          ? serializeTimestamp(data.date_created)
          : null,
        date_updated: data.date_updated
          ? serializeTimestamp(data.date_updated)
          : null,
      };
    });
    callback(result);
  });
  return unsubscribe;
}

// CREATE
export async function firestoreCreateDocument(collectionName, data) {
  try {
    const collectionReference = collection(db, collectionName);
    const document = await addDoc(collectionReference, {
      ...data,
      date_created: serverTimestamp(),
      date_updated: serverTimestamp(),
    });
    return document.id;
  } catch (error) {
    throw error;
  }
}

// UPDATE
export async function firestoreUpdateDocument(
  collectionName,
  documentID,
  data
) {
  const documentReference = doc(db, collectionName, documentID);
  await updateDoc(documentReference, {
    ...data,
    date_updated: serverTimestamp(),
  });
  return documentID;
}

// DELETE
export async function firestoreDeleteDocument(collectionName, documentID) {
  const documentReference = doc(db, collectionName, documentID);
  await deleteDoc(documentReference);
  return documentID;
}
