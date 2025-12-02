import { useParams } from "react-router-dom";
import { getRoute, getKey } from "../../utils/slugify";
import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";
import { getAnimalBreeds } from "../../enums/animal.breeds";
import Card from "../Navigation/Card";

import styles from "./AnimalsGallery.module.css";

function AnimalsGallery() {
    const { type, category, breed, id } = useParams();

    let title = "";
    let cardArray = [];

    if (!type) {
        title = "Animals";
        const animalTypes = getAnimalTypes();
        cardArray = animalTypes.map((animalType) => ({
            key: animalType.key,
            title: animalType.label,
            url: `/home/animals/${getRoute(animalType.key)}`,
            image: `/assets/cards/animals/types/${animalType.key}.png`,
        }));
    } else if (!category) {
        title = getAnimalTypes({ key: getKey(type) }).label;
        const animalCategories = getAnimalCategories({ type: getKey(type) });
        cardArray = animalCategories.map((category) => ({
            key: category.key,
            title: category.label,
            url: `/home/animals/${getRoute(category.type)}/${getRoute(category.key)}`,
            image: `/assets/cards/animals/categories/${category.key}.png`,
        }));
    } else if (!breed) {
        title = getAnimalBreeds({ key: getKey(breed) }).label;
        const animalBreeds = getAnimalBreeds({ category: getKey(category) });
        cardArray = animalBreeds.map((animalBreed) => ({
            key: animalBreed.key,
            title: animalBreed.label,
            url: `/home/animals/${getRoute(animalBreed.type)}/${getRoute(animalBreed.category)}/${getRoute(
                animalBreed.key,
            )}`,
            image: `/assets/cards/animals/breeds/${animalBreed.key}.png`,
        }));
    }

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>{title}</h2>
                <div className={styles.links}>
                    {cardArray.map((card) => (
                        <Card key={card.key} cardData={card} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AnimalsGallery;
