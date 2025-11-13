//Import Modules
import { Link } from "react-router-dom";

// Component Function
function UnderConstruction() {
    // Render DOM
    return (
        <div>
            <h2>Page is Under Construction</h2>
            <Link to="/home">Back to Dashboard</Link>
        </div>
    );
}

// Export Component
export default UnderConstruction;
