import { createContext, useContext, useEffect, useState } from "react";
import { onIdTokenChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext({ user: null, loading: true });

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (fbUser) => {
        
      if (fbUser) {
        const token = await fbUser.getIdToken();
        setUser({ uid: fbUser.uid, email: fbUser.email, token });
      } else {
        // Firebase says the token/user is invalid or missing
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut: signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);