import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";

import styles from "./ProtectedRoute.module.css";

export default function ProtectedRoute() {
    const { status } = useSelector((state) => state.auth);

    if (status === "UNAUTHENTICATED") {
        return <Navigate to="/login" replace />;
    }
    return (
        <>
            <div className={styles.navigationPanel}>
                <SideBar />
            </div>
            <div className={styles.contentPanel}>
                <Outlet />
            </div>
        </>
    );
}
