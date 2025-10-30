//Import Modules
import logo from "../assets/logo_large.png";
import styles from "./Dashboard.module.css";

// Component Function
function Dashboard() {
  // Render DOM
  return (
    <div>
      <img src={logo} alt="StarPet Logo" className={styles.logo} />
    </div>
  );
}

// Export Component
export default Dashboard;
