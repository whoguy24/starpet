// Import Modules
import styles from "./NavigationBar.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Component Function
function NavigationBar() {
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
        <div className={styles.navigationLogo}>Logo</div>
        {status === "AUTHENTICATED" && (
          <>
            <div className={styles.navigationMenuPages}>
              <Link to="/dashboard" className={styles.navigationLink}>
                Dashboard
              </Link>
              <Link to="/contacts" className={styles.navigationLink}>
                Contacts
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
export default NavigationBar;
