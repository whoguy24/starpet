// Import Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import Landing from "./pages/Landing";
import UserLogin from "./pages/UserLogin";
import UserRegistration from "./pages/UserRegistration";
import UserResetPassword from "./pages/UserResetPassword";

// Import CSS
import './App.css'

// Component Function
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/forgot_password" element={<UserResetPassword />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Landing /> 
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </>
  )
}

// Export
export default App
