//Import Modules
import logo from "../assets/logo_large.png";
import styles from "./Dashboard.module.css";

import { useSelector } from "react-redux";

// Component Function
function Dashboard() {
  const { currentUser } = useSelector((state) => state.auth);

  // Render DOM
  return (
    <div>
      <img src={logo} alt="StarPet Logo" className={styles.logo} />
      <div>
        <p>You are currently logged in as:</p>
        <p>{currentUser?.email}</p>
      </div>
    </div>
  );
}

// Export Component
export default Dashboard;
