// Import Modules
import { collection, getDocs, doc, serverTimestamp, writeBatch } from "firebase/firestore";
import { db } from './config';
import serializeTimestamp from "./timestamp";

// Request Collection from Firestore
export async function firestoreFetchUsers() {
  const users = collection(db, "users");
  const snapshot = await getDocs(users);
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

export const firestoreCreateUser = async (user, contact) => {

  const batch = writeBatch(db);

  const userRef = doc(collection(db, "users"));
  const contactRef = doc(collection(db, "contacts"));

   const contactPayload = {
    ...contact,
    active: true,
    date_created: serverTimestamp(),
    date_updated: serverTimestamp(),
  };

   const userPayload = {
    ...user,
    contactID: contactRef.id,
    active: true,
    role: "User",
    date_created: serverTimestamp(),
    date_updated: serverTimestamp(),
  };

  batch.set(userRef, userPayload);
  batch.set(contactRef, contactPayload);

  await batch.commit();

  return {
    userId: userRef.id,
    contactId: contactRef.id,
  };

};