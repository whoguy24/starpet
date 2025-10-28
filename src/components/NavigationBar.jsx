// Import Modules
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import { useAuth } from "../auth/AuthProvider";

// Component Function
function NavigationBar() {

    // Define User State from AuthProvider
    const { user } = useAuth();

    // Render DOM
    return (

        <nav className={styles.navigation}>

            <div className={styles.navigationContainer}>

                <div className={styles.navigationLogo}>
                </div>

                { user &&
                    <div className={styles.navigationMenuPages}>
                        <Link to="/dashboard" className={styles.navigationLink}>Dashboard</Link>
                        <Link to="/contacts" className={styles.navigationLink}>Contacts</Link>
                    </div>
                }

                { !user && 
                    <div className={styles.navigationMenuAccount}>
                        <Link to="/login" className={styles.navigationLink}>Log In</Link>
                        <Link to="/register" className={styles.navigationLink}>Register</Link>
                    </div>
                }

            </div>


        </nav>

    );

};

// Export Component Function
export default NavigationBar;