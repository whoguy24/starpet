// Import Modules
import styles from "./AnimalsCategory.module.css";
import Card from "../Navigation/Card";
import { useParams } from "react-router-dom";
// import { types } from "../../enums/animals/types";
// import { categories } from "../../enums/animals/categories";
// import { breeds } from "../../enums/animals/breeds";

import { getEnum } from "../../scripts/getEnum";

// Component Function
function AnimalsCategory() {
    // Filter Animals Based on Type From URL
    const { type, category } = useParams();

    const enumType = getEnum("types", "route", type);
    const enumCategory = getEnum("categories", "route", category);
    const enumBreeds = getEnum("breeds", "category", enumCategory.key);

    console.log(enumCategory);

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>{enumCategory.plural}</h2>
                <div className={styles.links}>
                    {enumBreeds.map((enumBreed, id) => (
                        <Card
                            key={id}
                            path={`/home/animals/${enumType.route}/${enumCategory.route}/${enumBreed.route}`}
                            title={enumBreed.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default AnimalsCategory;
