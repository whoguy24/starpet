// Import Modules
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

// Component Function
export default function ProtectedRoute({ children }) {

  // Query User State from AuthProvider
  const { user } = useAuth();

  // Allow Access to App, if User is Logged In
  if (!user) return <Navigate to="/login" replace />;
  return children;

}