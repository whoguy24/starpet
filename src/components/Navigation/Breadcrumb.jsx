// Import Modules
import styles from "./Breadcrumb.module.css";
import { Link, useLocation } from "react-router-dom";

// import { useSelector } from "react-redux";
// import { types } from "../../enums/animals/types";

// Component Function
function Breadcrumb() {
    // Define Route Labels
    const routes = [
        { key: "dashboard", label: "Dashboard" },
        { key: "animals", label: "Animals" },
        { key: "contacts", label: "Contacts" },
        { key: "users", label: "Users" },
        { key: "projects", label: "Projects" },
    ];

    // Render DOM
    return <></>;
}

// Export Component Function
export default Breadcrumb;
