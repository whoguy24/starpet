import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ToggleView from "./ToggleView";
import Breadcrumb from "./Breadcrumb";
import { useLocation } from "react-router-dom";

function Navigation({ view, setView }) {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const { status } = useSelector((state) => state.auth);
    function handleLogout() {
        dispatch({ type: "AUTH_LOGOUT" });
    }

    return (
        <nav className={styles.container}>
            <Link to="/home">
                <img className={styles.logo} src="/assets/logos/navigation.png" alt="StarPet Logo" />
            </Link>
            <div className={styles.navigationTop}>
                {status === "AUTHENTICATED" && (
                    <>
                        <div className={styles.navigationTopContainer}>
                            <Link to="/home" className={styles.navigationLink}>
                                HOME
                            </Link>
                            <Link to="/home/animals" className={styles.navigationLink}>
                                ANIMALS
                            </Link>
                            <Link to="/home/contacts" className={styles.navigationLink}>
                                CONTACTS
                            </Link>
                            <Link to="/home/projects" className={styles.navigationLink}>
                                PROJECTS
                            </Link>
                            <Link to="/home/organizations" className={styles.navigationLink}>
                                ORGANIZATIONS
                            </Link>
                        </div>
                        {/* <div>
                            <input className={styles.searchBar} type="search" placeholder="Search" />
                        </div> */}
                        {/* <div>
                            <button onClick={handleDebug}>Debug</button>
                        </div> */}
                        <div>
                            <IconButton onClick={handleLogout}>
                                <AccountCircleIcon className={styles.navigationProfileButton} />
                            </IconButton>
                        </div>
                    </>
                )}
            </div>
            <div className={styles.navigationBottom}>
                {pathname != "/home" && (
                    <>
                        <Breadcrumb />
                        <ToggleView view={view} setView={setView} />
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navigation;
