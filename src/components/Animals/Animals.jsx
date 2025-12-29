import styles from "./Animals.module.css";
import AnimalsGallery from "./AnimalsGallery";
import SideBar from "../navigation/SideBar";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../navigation/Card";
import CategoryHeader from "../Layout/CategoryHeader";
import { useState, useEffect } from "react";

function Animals({ view }) {
    // const location = useLocation();
    // const animals = useSelector((state) => state.animals);
    // const { type, category } = useParams();

    // useEffect(() => {
    //     const uniqueTypes = [...new Set(animals.map((animal) => animal.enum_type))];
    // }, []);

    // const page = getMenuItem({ url: location.pathname }).id;

    // let title = "";
    // let cardArray = [];
    // const menuItem = getMenuItem({ url: location.pathname });

    // if (!type && !category) {
    //     title = menuItem.plural;
    //     const animalTypes = getAnimalTypes();
    //     cardArray = animalTypes.map((animalType) => ({
    //         id: animalType.id,
    //         label: animalType.label,
    //         url: animalType.url,
    //         image: `/assets/cards/animals/types/${animalType.id}.png`,
    //     }));
    // } else if (type && !category) {
    //     title = menuItem.plural;
    //     const animalCategories = getAnimalCategories({ type: menuItem.id });
    //     cardArray = animalCategories.map((category) => ({
    //         id: category.id,
    //         label: category.label,
    //         url: category.url,
    //         image: `/assets/cards/animals/categories/${category.id}.png`,
    //     }));
    // } else if (type && category) {
    //     title = menuItem.plural;
    //     const animalCategories = getAnimalCategories({ type: menuItem.id });
    //     cardArray = animalCategories.map((category) => ({
    //         id: category.id,
    //         label: category.label,
    //         url: category.url,
    //         image: `/assets/cards/animals/categories/${category.id}.png`,
    //     }));
    // }

    return (
        <div className={styles.container}>
            {/* <div className={styles.title}>
                <h2>{title}</h2>
            </div>
            <div className={styles.links}>
                {cardArray.map((card) => (
                    <Card key={card.id} cardData={card} />
                ))}
            </div> */}
        </div>
    );
}

export default Animals;
