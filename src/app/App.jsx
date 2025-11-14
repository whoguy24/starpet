// Import Modules
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/Navigation/ProtectedRoute";
import Home from "../components/Home/Home";
import UnderConstruction from "../components/Navigation/UnderConstruction";
import UserLogin from "../components/User/UserLogin";
import UserRegistration from "../components/User/UserRegistration";
import UserResetPassword from "../components/User/UserResetPassword";
import Navigation from "../components/Navigation/Navigation";
import Breadcrumb from "../components/Navigation/Breadcrumb";
import NotFound from "../components/Navigation/NotFound";
import Footer from "../components/Navigation/Footer";
import AnimalsGallery from "../components/Animals/AnimalsGallery";
import AnimalsDetail from "../components/Animals/AnimalsDetail";
import Contacts from "../components/Contacts/Contacts";
import AnimalsType from "../components/Animals/AnimalsType";
import AnimalsCategory from "../components/Animals/AnimalsCategory";

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
                        {/* Redirects */}
                        <Route path="/" element={<Navigate to="/home" replace />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />

                        {/* Public Routes */}
                        <Route path="/login" element={<UserLogin />} />
                        <Route path="/register" element={<UserRegistration />} />
                        <Route path="/forgot_password" element={<UserResetPassword />} />
                        <Route path="/404" element={<NotFound />} />

                        {/* Protected Routes */}

                        <Route element={<ProtectedRoute />}>
                            <Route path="/home" element={<Home />} />
                            <Route path="/home/animals" element={<AnimalsType />} />
                            <Route path="/home/animals/:type" element={<AnimalsCategory />} />
                            <Route path="/home/animals/:type/:category" element={<AnimalsGallery />} />
                            <Route path="/home/animals/:type/:category/:id" element={<AnimalsDetail />} />
                            <Route path="/home/contacts" element={<Contacts />} />
                            <Route path="/home/projects" element={<UnderConstruction />} />
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
