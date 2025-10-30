import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { register, login, logout, resetPassword } from "../firebase/auth.js";

// Create Auth Context
const firebaseAuth = createContext();

// Custom Hook
export const useAuth = () => useContext(firebaseAuth);

// Component Function
export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  // Subscribe to Firebase Authorization State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch({
          type: "AUTH_LOAD",
          payload: {
            authUserID: firebaseUser.uid,
            email: firebaseUser.email,
          },
        });
      } else {
        dispatch({ type: "AUTH_CLEAR" });
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <firebaseAuth.Provider value={{ register, login, logout, resetPassword }}>
      {children}
    </firebaseAuth.Provider>
  );
}
