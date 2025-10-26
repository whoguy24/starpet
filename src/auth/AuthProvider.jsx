import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

// Create Auth Context
const Auth = createContext();

// Custom Hook
export const useAuth = () => {
  const context = useContext(Auth);
  return context;
};

// Component Function
export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Subscribe to Firebase Authorization State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  // Register function
  const register = async (email, password) => {
      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          await signOut(auth);
          return userCredential;
      } catch (error) {
          throw error;
      }
  };

  // Login function
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
    }
  };

  // Reset Password function
  const resetPassword = async (email) => {
      try {
        await sendPasswordResetEmail(auth, email);
      } catch (error) {
        console.log(error)
      }
  };

  return (
    <Auth.Provider value={{ user, login, logOut, register, resetPassword }}>
      {!loading && children}
    </Auth.Provider>
  );
}