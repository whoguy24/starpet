// Import Modules
import styles from "./AnimalsType.module.css";
import Card from "../Navigation/Card";
import { useParams } from "react-router-dom";
import { types } from "../../enums/animals/types"
import { categories } from "../../enums/animals/categories"

// Component Function
function AnimalsCategory() {

    // Filter Animals Based on Type From URL
    const { type } = useParams();

    const title = types.find((types) => types.route === type)?.plural;
    const typeKey = types.find((types) => types.route === type)?.key;

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>{title}</h2>
                <div className={styles.links}>
                    {categories[typeKey].map((category, id) => (
                        <Card key={id} path={`/home/animals/${type}/${category.route}`} title={category.label} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default AnimalsCategory;
