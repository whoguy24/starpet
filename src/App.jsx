// Import Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import Landing from "./pages/LandingTest";
import Login from "./pages/LoginTest";

// Import CSS
import './App.css'

// Component Function
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
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
