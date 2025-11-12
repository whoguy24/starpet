// Import Modules
import styles from "./Animals.module.css";
import { Outlet } from "react-router-dom";
import AnimalsCategory from "./AnimalsCategory";

// Component Function
function Animals() {
  // Render DOM
  return (
    <div>
      <AnimalsCategory />
    </div>
  );
}

// Export Component Function
export default Animals;
