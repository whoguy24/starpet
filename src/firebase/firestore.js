// Import Modules
import { collection, getDocs, onSnapshot, addDoc, updateDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { db } from './config';
import serializeTimestamp from "./timestamp";

// LISTEN
export function firestoreListener(collectionName, callback) {
  const collectionReference = collection(db, collectionName);
  const unsubscribe = onSnapshot(collectionReference, (snapshot) => {
    try {
      const result = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          ...data,
          date_created: data.date_created ? serializeTimestamp(data.date_created) : null,
          date_updated: data.date_updated ? serializeTimestamp(data.date_updated) : null,
        };
      });
      callback(result);
    } catch (error) {
      console.error("Failed to process snapshot:", error);
    }
  });
  return unsubscribe;
};

// FETCH
export async function firestoreFetchCollection(collectionName) {
  const collectionReference = collection(db, collectionName);
  const snapshot = await getDocs(collectionReference);
  return snapshot.docs.map(doc => { 
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      date_created: serializeTimestamp(data.date_created),
      date_updated: serializeTimestamp(data.date_updated),
    };
  });
};

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
    console.error("Error adding contact:", error);
    throw error;
  }
};

// UPDATE
export async function firestoreUpdateDocument(collectionName, documentID, data) {
  const documentReference = doc(db, collectionName, documentID);
  await updateDoc(documentReference, {
    ...data,
    date_updated: serverTimestamp(),
  });
};

// DELETE
export async function firestoreDeleteDocument(collectionName, documentID) {
  const documentReference = doc(db, collectionName, documentID);
  await deleteDoc(documentReference);
};