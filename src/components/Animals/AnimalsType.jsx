// Import Modules
import styles from "./AnimalsType.module.css";
import Card from "../Navigation/Card";
import { useParams } from "react-router-dom";
import { getEnum } from "../../scripts/getEnum";

// Component Function
function AnimalsType() {
    // Filter Animals Based on Type From URL
    const { type } = useParams();

    const enumType = getEnum("types", "route", type);
    const enumCategories = getEnum("categories", "type", enumType.key);

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>{enumType.plural}</h2>
                <div className={styles.links}>
                    {enumCategories.map((category, id) => (
                        <Card
                            key={id}
                            path={`/home/animals/${enumType.route}/${category.route}`}
                            title={category.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default AnimalsType;
