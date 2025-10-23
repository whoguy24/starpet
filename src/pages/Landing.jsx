//Import Modules
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

// Component Function
function Landing() {

  // Define React-Router Function
  const navigate = useNavigate();

  // Define User State
  const { user } = useAuth();

  // Navigation Button Handler
  function buttonHandler() {
    navigate("/login");
  }

  // Render DOM
  return (
    <div>
        <h2>Welcome to StarPet</h2> 
        <p>You are currently logged in as:</p>
        <p>{user.email}</p>
        <button type="button" onClick={buttonHandler}>
            Log In Page
        </button>
    </div>
  );

};

// Export Component
export default Landing;