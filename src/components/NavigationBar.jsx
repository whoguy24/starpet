// Import Modules
import styles from "./NavigationBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Component Function
function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authStatus = useSelector((state) => state.auth.status);

  function handleLogout() {
    dispatch({ type: "AUTH_LOGOUT" });
    navigate("login");
  }

  // Render DOM
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationLogo}></div>
        {authStatus === "authenticated" && (
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
