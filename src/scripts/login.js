import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log(`${userCredential.user.email} is Logged in.`);
  return userCredential.user;
};

export default loginUser;