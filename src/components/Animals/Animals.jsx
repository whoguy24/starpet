// Import Modules
import styles from "./Animals.module.css";
import Card from "../Navigation/Card";
import { getEnum } from "../../scripts/getEnum";

// Component Function
function Animals() {
    const enumTypes = getEnum("types");
    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>Animals</h2>
                <div className={styles.links}>
                    {enumTypes.map((type, id) => (
                        <Card
                            key={id}
                            path={`/home/animals/${getEnum("types", "key", type.key).route}`}
                            title={type.plural}
                        />
                    ))}
                    {/* <Card path={"/home/animals/other"} title="Other" /> */}
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default Animals;
