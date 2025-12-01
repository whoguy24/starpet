import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./AnimalsBreed.module.css";

import { getKey } from "../../utils/slugify";
import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";
import { getAnimalBreeds } from "../../enums/animal.breeds";

import CategoryHeader from "../Layout/CategoryHeader";
import AnimalCard from "./AnimalCard";

// Component Function
function AnimalsBreed() {
    // Define Redux State
    const animals = useSelector((state) => state.animals);

    const dispatch = useDispatch();

    // Filter Animals Based on Type From URL
    const { type, category, breed } = useParams();

    // const animalType = getAnimalType(getKey(type));
    // const animalCategory = getAnimalCategory(getKey(category), getKey(type));
    // const animalBreed = getAnimalBreed(getKey(breed), getKey(type), getKey(category));

    // Define Local State
    const [animalsTable, setAnimalsTable] = useState([]);

    // useEffect(() => {
    //     setAnimalsTable(
    //         animals.filter(
    //             (animal) =>
    //                 animal.enum_type === animalType.key &&
    //                 animal.enum_category === animalCategory.key &&
    //                 animal.enum_breed === animalBreed.key,
    //         ),
    //     );
    // }, [animals]);

    // TODO - New Button
    function handleOnNew() {
        console.log("NEW");
        // dispatch({
        //     type: "CREATE_ANIMAL",
        //     payload: {
        //         contact_ID: "weod4ofF1WzsdChzCPFX",
        //         name: "Max",
        //         enum_type: "dog",
        //         enum_category: "herding",
        //         enum_breed: "border_collie",
        //         enum_flag: "green",
        //         enum_sex: "male",
        //         enum_size: "medium",
        //         description: "Border Collie",
        //         color: "Black",
        //         skills: {
        //             down_stay: true,
        //             sit_stay: true,
        //             stand_stay: true,
        //         },
        //         active: true,
        //     },
        // });
    }

    // TODO - Actions Button
    function handleOnAction() {
        console.log("ACTIONS");
    }

    // TODO - Sort Button
    function handleOnSort() {
        console.log("SORT");
    }

    // TODO - Filter Button
    function handleOnFilter() {
        console.log("FILTER");
    }

    return (
        <div className={styles.container}>
            {/* <CategoryHeader
                title={animalBreed.label}
                imageURL={`/assets/cards/animals/breeds/${animalBreed.key}.png`}
                onNew={handleOnNew}
                onAction={handleOnAction}
                onSort={handleOnSort}
                onFilter={handleOnFilter}
            />

            <div className={styles.galleryGrid}>
                {animalsTable.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div> */}
        </div>
    );
}

export default AnimalsBreed;
