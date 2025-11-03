//Import Modules
// import logo from "../assets/logo_large.png";
import styles from "./Dashboard.module.css";

import { useSelector } from "react-redux";

// Component Function
function Dashboard() {
  // Initialize Global State
  const { account } = useSelector((state) => state.auth);

  // Render DOM
  return (
    <div>
      {/* <img src={logo} alt="StarPet Logo" className={styles.logo} /> */}
      <div>
        <h2>Welcome to StarPet!</h2>
        <p>You are currently logged in as:</p>
        <p>{account}</p>
      </div>
    </div>
  );
}

// Export Component
export default Dashboard;
