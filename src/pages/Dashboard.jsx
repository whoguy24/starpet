//Import Modules
import { useAuth } from "../auth/AuthProvider";
import logo from "../assets/logo_large.png";
import styles from "./Dashboard.module.css";

// Component Function
function Dashboard() {

  // Define User State from AuthProvider
  const { user, logOut } = useAuth();

  // Log User Out Button Handler
  const handleLogout = async () => {
      try {
          await logOut();
      } catch (err) {
          console.log(err);
      }
  };

  // Render DOM
  return (
    <div>
        <img src={logo} alt="StarPet Logo" className={styles.logo} />
        <p>You are currently logged in as:</p>
        <p>{user.email}</p>
        <button onClick={handleLogout}>
          Log Out
        </button>
    </div>
  );

};

// Export Component
export default Dashboard;