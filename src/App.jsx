// Import Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing.jsx";

// Import CSS
import './App.css'

// Component Function
function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>

    </>
  )
}

// Export Component
export default App
