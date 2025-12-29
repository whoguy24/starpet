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
import { getView, saveView } from "../utils/session";
import Debug from "../components/Debug/Debug";

import { useState, useEffect } from "react";

function App() {
    const { status } = useSelector((state) => state.auth);

    const [view, setView] = useState(getView() || "gallery");

    useEffect(() => {
        saveView(view);
    }, [view]);

    return (
        <>
            <div className="app">
                <header>
                    <Navigation view={view} setView={setView} />
                </header>
                <main className="app-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                        <Route path="/login" element={<UserLogin />} />
                        <Route path="/register" element={<UserRegistration />} />
                        <Route path="/forgot_password" element={<UserResetPassword />} />
                        <Route path="/404" element={<NotFound />} />
                        <Route path="/debug" element={<Debug />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path="/dashboard" element={<Home />} />
                            <Route path="/animals/:type?/:id?" element={<Animals view={view} />} />
                            <Route path="/contacts/:type?/:id?" element={<UnderConstruction />} />
                            <Route path="/projects/:type?/:id?" element={<UnderConstruction />} />
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
