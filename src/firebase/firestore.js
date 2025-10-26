// Import Modules
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';

// Request Collection from Firestore
export async function firestoreFetchUsers() {
  const users = collection(db, "users");
  const snapshot = await getDocs(users);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};