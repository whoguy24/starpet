// Import Modules
import { Link } from "react-router-dom";
import styles from "./AnimalsCategory.module.css";
import { animalTypes } from "../../enums/animalTypes";

// Component Function
function AnimalsCategory() {
  // Render DOM
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.header}>Animals</h2>
        <div className={styles.links}>
          {animalTypes.map((animalTypes, index) => (
            <Link
              key={animalTypes.plural}
              to={`/animals/${animalTypes.plural}`}
            >
              {animalTypes.plural}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Export Component Function
export default AnimalsCategory;
