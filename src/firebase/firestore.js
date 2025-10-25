import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config';

export async function firestoreFetchUsers() {
  const usersCol = collection(db, "users");
  const snapshot = await getDocs(usersCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}