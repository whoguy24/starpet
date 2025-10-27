// Import Modules
import { collection, getDocs } from "firebase/firestore";
import { db } from './config';
import serializeTimestamp from "./timestamp";

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