// Import Modules
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/logos/logo_nav.svg";

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
    <nav className={styles.navigation}>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationLogo}>
          <Link to="/dashboard">
            <img
              className={styles.navigationLogo}
              src={logo}
              alt="StarPet Logo"
            />
          </Link>
        </div>
        {status === "AUTHENTICATED" && (
          <>
            <div className={styles.navigationMenuPages}>
              <Link to="/dashboard" className={styles.navigationLink}>
                Home
              </Link>
              <Link to="/animals" className={styles.navigationLink}>
                Animals
              </Link>
              <Link to="/contacts" className={styles.navigationLink}>
                Contacts
              </Link>
              <Link to="/projects" className={styles.navigationLink}>
                Projects
              </Link>
            </div>
            <div className={styles.navigationMenuAccount}>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

// Export Component Function
export default Navigation;
