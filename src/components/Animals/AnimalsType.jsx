// Import Modules
import styles from "./AnimalsType.module.css";
import Card from "../Navigation/Card";
import { useParams } from "react-router-dom";

import { getRoute, getKey } from "../../utils/slugify";
import { getAnimalType } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";

// Component Function
function AnimalsType() {
    // Filter Animals Based on Type From URL
    const { type } = useParams();

    const animalType = getAnimalType(getKey(type));
    const animalCategories = getAnimalCategories(getKey(type));

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>{animalType.plural}</h2>
                <div className={styles.links}>
                    {animalCategories.map((category) => (
                        <Card
                            key={category.key}
                            path={`/home/animals/${type}/${getRoute(category.key)}`}
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
