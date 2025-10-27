// Import Modules
import { collection, getDocs, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from './config';
import serializeTimestamp from "./timestamp";
import store from "../redux/store";

// Request Collection from Firestore
export async function firestoreFetchContacts() {
  const contacts = collection(db, "contacts");
  const snapshot = await getDocs(contacts);
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

export function listenToContacts() {
  const contactsCol = collection(db, "contacts");
  return onSnapshot(contactsCol, async () => {
    try {
      const contacts = await firestoreFetchContacts();
      store.dispatch({ type: "FETCH_CONTACTS", payload: contacts });
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  });
}

export async function firestoreCreateContact(contactData) {
  try {
    const contactsCol = collection(db, "contacts");
    await addDoc(contactsCol, {
      ...contactData,
      date_created: serverTimestamp(),
      date_updated: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
}