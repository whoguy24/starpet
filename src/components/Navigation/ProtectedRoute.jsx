// Import Modules
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Component Function
export default function ProtectedRoute({ children }) {
  const { status } = useSelector((state) => state.auth);
  if (status === "LOADING") {
    <h2>Loading...</h2>;
  }
  if (status === "AUTHENTICATED") {
    return children;
  }
  if (status === "UNAUTHENTICATED") {
    return <Navigate to="/login" replace />;
  }
}
