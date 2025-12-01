import { useParams } from "react-router-dom";
import { getRoute, getKey } from "../../utils/slugify";
import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";

import styles from "./AnimalsExplore.module.css";

function AnimalsExplore() {
    const { type } = useParams();

    const typeKey = getKey(type);

    const animalType = getAnimalTypes({ key: typeKey });
    const animalCategories = getAnimalCategories({ type: typeKey });

    return <div></div>;
}

export default AnimalsExplore;
