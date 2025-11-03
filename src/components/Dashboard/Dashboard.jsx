//Import Modules
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

// Component Function
function Dashboard() {
  // Render DOM
  return (
    <div className={styles.dashboardPage}>
      <div>
        <h2>Welcome to StarPet!</h2>
        <p>Click one of the links below to begin:</p>
        <div className={styles.dashboardLinks}>
          <Link to="/animals">Animals</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}

// Export Component
export default Dashboard;
