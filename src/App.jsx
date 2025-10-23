// Import Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";

// Import CSS
import './App.css'

// Component Function
function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Landing /> } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </>
  )
}

// Export
export default App
