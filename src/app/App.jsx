// Import Modules
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/Navigation/ProtectedRoute";
import Home from "../components/Home/Home";
import UnderConstruction from "../components/Navigation/UnderConstruction";
import UserLogin from "../components/User/UserLogin";
import UserRegistration from "../components/User/UserRegistration";
import UserResetPassword from "../components/User/UserResetPassword";
import Navigation from "../components/Navigation/Navigation";
import SideBar from "../components/Navigation/SideBar";
import NotFound from "../components/Navigation/NotFound";
import Footer from "../components/Navigation/Footer";
import Contacts from "../components/Contacts/Contacts";
import Animals from "../components/Animals/Animals";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
    const { status } = useSelector((state) => state.auth);
    return (
        <>
            <div className="app">
                <header>
                    <Navigation />
                </header>
                <main className="app-content">
                    {status === "AUTHENTICATED" && (
                        <div className="navigation-panel">
                            <SideBar />
                        </div>
                    )}

                    <div className="content-panel">
                        <Routes>
                            <Route path="/" element={<Navigate to="/home" replace />} />
                            <Route path="*" element={<Navigate to="/404" replace />} />
                            <Route path="/login" element={<UserLogin />} />
                            <Route path="/register" element={<UserRegistration />} />
                            <Route path="/forgot_password" element={<UserResetPassword />} />
                            <Route path="/404" element={<NotFound />} />

                            <Route element={<ProtectedRoute />}>
                                <Route path="/home" element={<Home />} />
                                <Route path="/home/animals/:type?/:category?/:breed?/:id?" element={<Animals />} />
                                <Route path="/home/contacts" element={<Contacts />} />
                                <Route path="/home/contacts/owner" element={<UnderConstruction />} />
                                <Route path="/home/contacts/crew" element={<UnderConstruction />} />
                                <Route path="/home/projects" element={<UnderConstruction />} />
                                <Route path="/home/projects/ac" element={<UnderConstruction />} />
                                <Route path="/home/projects/bobp" element={<UnderConstruction />} />
                                <Route path="/home/projects/tet" element={<UnderConstruction />} />
                                <Route path="/home/organizations" element={<UnderConstruction />} />
                                <Route path="/home/organizations/rescue" element={<UnderConstruction />} />
                                <Route path="/home/organizations/client" element={<UnderConstruction />} />
                                <Route path="/home/organizations/service" element={<UnderConstruction />} />
                            </Route>
                        </Routes>
                    </div>
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
