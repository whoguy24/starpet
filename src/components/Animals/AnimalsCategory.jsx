// Import Modules
import styles from "./AnimalsCategory.module.css";
import Card from "../Navigation/Card";
import { useParams } from "react-router-dom";

import { getRoute, getKey } from "../../utils/slugify";
import { getAnimalType } from "../../enums/animal.types";
import { getAnimalCategory } from "../../enums/animal.categories";

import { getAnimalBreeds } from "../../enums/animal.breeds";

// Component Function
function AnimalsCategory() {
    // Filter Animals Based on Type From URL
    const { type, category } = useParams();

    const animalType = getAnimalType(getKey(type));
    const animalCategory = getAnimalCategory(getKey(category), getKey(type));
    const animalBreeds = getAnimalBreeds(animalType.key, animalCategory.key);

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>{animalCategory.plural}</h2>
                <div className={styles.links}>
                    {animalBreeds.map((breed) => (
                        <Card
                            key={breed.key}
                            path={`/home/animals/${type}/${category}/${getRoute(breed.key)}`}
                            imagePath={`/assets/cards/animals/breeds/${breed.key}.png`}
                            title={breed.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default AnimalsCategory;
