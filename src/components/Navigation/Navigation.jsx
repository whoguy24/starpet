// Import Modules
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Breadcrumb from "./Breadcrumb";

// Component Function
function Navigation() {
    // Initialize Hooks
    const dispatch = useDispatch();

    // Initialize Global State
    const { status } = useSelector((state) => state.auth);

    // Log Out Button Handler
    function handleLogout() {
        dispatch({ type: "AUTH_LOGOUT" });
    }

    // Render DOM
    return (
        <nav className={styles.container}>
            <Link to="/home">
                <img className={styles.logo} src="/assets/logos/navigation.png" alt="StarPet Logo" />
            </Link>
            <div className={styles.navigationBar}>
                {status === "AUTHENTICATED" && (
                    <>
                        <div className={styles.navigationPages}>
                            <Link to="/home" className={styles.navigationLink}>
                                Home
                            </Link>
                            <Link to="/home/animals" className={styles.navigationLink}>
                                Animals
                            </Link>
                            <Link to="/home/contacts" className={styles.navigationLink}>
                                Contacts
                            </Link>
                            <Link to="/home/projects" className={styles.navigationLink}>
                                Projects
                            </Link>
                        </div>
                        <div>
                            <input className={styles.searchBar} type="search" placeholder="Search" />
                        </div>
                        <div>
                            <IconButton aria-label="delete">
                                <AccountCircleIcon className={styles.navigationProfileButton} />
                            </IconButton>
                        </div>
                    </>
                )}
            </div>
            <Breadcrumb />
        </nav>
    );
}

// Export Component Function
export default Navigation;
