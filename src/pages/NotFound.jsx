//Import Modules
import { Link } from "react-router-dom";

// Component Function
function NotFound() {

  // Render DOM
  return (
    <div>
        <h2>Page Not Found</h2> 
        <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );

};

// Export Component
export default NotFound;