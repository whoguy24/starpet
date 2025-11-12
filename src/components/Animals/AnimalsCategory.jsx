// Import Modules
import { Link } from "react-router-dom";
import styles from "./AnimalsCategory.module.css";
import { types } from "../../enums/animals/types";

// Component Function
function AnimalsCategory() {
    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>Animals</h2>
                <div className={styles.links}>
                    {types.map((type) => (
                        <Link
                            key={type.navigation}
                            to={`/animals/${type.navigation}`}
                        >
                            {type.plural}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default AnimalsCategory;
