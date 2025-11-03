// Import Modules
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Component Function
export default function ProtectedRoute() {
  const { status } = useSelector((state) => state.auth);

  if (status === "AUTHENTICATED") {
    return <Outlet />;
  }

  if (status === "UNAUTHENTICATED") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
