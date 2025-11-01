// Import Modules
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Component Function
export default function ProtectedRoute({ children }) {
  const { status } = useSelector((state) => state.auth);
  if (status === "idle" || status === "loading") {
    return null;
  } else if (status !== "authenticated") {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}
