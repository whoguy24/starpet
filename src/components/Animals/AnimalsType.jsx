// Import Modules
import styles from "./AnimalsType.module.css";
import Card from "../Navigation/Card";

import { types } from "../../enums/animals/types"

// Component Function
function AnimalsType() {
    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>Animals</h2>
                <div className={styles.links}>
                    {types.map((type, id) => (
                        <Card key={id} path={`/home/animals/${type.route}`} title={type.plural} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default AnimalsType;
