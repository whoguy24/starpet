// Import Modules
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import ProtectedRoute from "../components/Navigation/ProtectedRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import UserLogin from "../components/User/UserLogin";
import UserRegistration from "../components/User/UserRegistration";
import UserResetPassword from "../components/User/UserResetPassword";
import Navigation from "../components/Navigation/Navigation";
import NotFound from "../components/Navigation/NotFound";
import Contacts from "../components/Contacts/Contacts";
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
      <Navigation />
      <div className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/forgot_password" element={<UserResetPassword />} />
          <Route path="/404" element={<NotFound />} />
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
