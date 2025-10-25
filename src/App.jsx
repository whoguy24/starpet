// Import Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProtectedRoute from "./auth/ProtectedRoute";
import Landing from "./pages/Landing";
import UserLogin from "./pages/UserLogin";
import UserRegistration from "./pages/UserRegistration";
import UserResetPassword from "./pages/UserResetPassword";

// Import CSS
import './App.css'

// Component Function
function App() {

    // Redux Variables
    const dispatch = useDispatch();

    // Redux Store Variables
    const users = useSelector(store => store.user);

    // Fetch Users
    useEffect(() => {
      dispatch({ type: "FETCH_USERS" });
    }, [dispatch]);

  // Render DOM
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

// Export Component Function
export default App
