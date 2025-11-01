// Import Modules
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import UserLogin from "../pages/UserLogin";
import UserRegistration from "../pages/UserRegistration";
import UserResetPassword from "../pages/UserResetPassword";
import NavigationBar from "../components/NavigationBar";
import NotFound from "../pages/NotFound";
import Contacts from "../pages/Contacts";
import config from "./config";

// Import CSS
import "./App.css";

// Component Function
function App() {
  // Print Configuration Log to Console
  // (VITE_VERBOSE_LOG = true/false) in src/.env
  useEffect(() => {
    if (config.app_verbose_log === "true") {
      console.log(config.log());
    }
  }, []);

  // Render DOM
  return (
    <>
      <NavigationBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/NotFound" replace />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/forgot_password" element={<UserResetPassword />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}

// Export Component Function
export default App;
