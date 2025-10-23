import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

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
  }, []);

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

  return (
    <Auth.Provider value={{ user, login, logOut }}>
      {!loading && children}
    </Auth.Provider>
  );
}