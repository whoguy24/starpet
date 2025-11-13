//Import Modules
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

// Component Function
function Home() {
    // Render DOM
    return (
        <div className={styles.dashboardPage}>
            <div>
                <h2 className={styles.dashboardHeader}>Welcome to StarPet!</h2>
                <p>Click one of the links below to begin:</p>
                <div className={styles.dashboardLinks}>
                    <Link to="/home/animals">Animals</Link>
                    <Link to="/home/contacts">Contacts</Link>
                    <Link to="/home/projects">Projects</Link>
                </div>
            </div>
        </div>
    );
}

// Export Component
export default Home;
