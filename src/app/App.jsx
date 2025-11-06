// Import Modules
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/Navigation/ProtectedRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import UserLogin from "../components/User/UserLogin";
import UserRegistration from "../components/User/UserRegistration";
import UserResetPassword from "../components/User/UserResetPassword";
import Navigation from "../components/Navigation/Navigation";
import Breadcrumb from "../components/Navigation/Breadcrumb";
import NotFound from "../components/Navigation/NotFound";
import Footer from "../components/Navigation/Footer";
import Animals from "../components/Animals/Animals";
import AnimalsCategory from "../components/Animals/AnimalsCategory";
import AnimalsGallery from "../components/Animals/AnimalsGallery";
import AnimalsDetail from "../components/Animals/AnimalsDetail";
import Contacts from "../components/Contacts/Contacts";

// Import CSS
import "./App.css";

// Component Function
function App() {
  // Render DOM
  return (
    <>
      <div className="app">
        <header>
          <Navigation />
          <Breadcrumb />
        </header>
        <main className="app-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/forgot_password" element={<UserResetPassword />} />
            <Route path="/404" element={<NotFound />} />
            {/* Redirects */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/animals" element={<Animals />}>
                <Route index element={<Navigate to="categories" replace />} />
                <Route path="categories" element={<AnimalsCategory />} />
                <Route path=":category" element={<AnimalsGallery />} />
                <Route path=":category/:id" element={<AnimalsDetail />} />
              </Route>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

// Export Component Function
export default App;
