import styles from "./Animals.module.css";
import AnimalsGallery from "./AnimalsGallery";
import SideBar from "../Navigation/SideBar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { menu, getMenuItem } from "../../db/menu";
import { getAnimalTypes } from "../../db/animal.types";
import Card from "../Navigation/Card";
import CategoryHeader from "../Layout/CategoryHeader";

function Animals({ view }) {
    const location = useLocation();
    const animals = useSelector((state) => state.animals);

    const page = getMenuItem({ url: location.pathname }).id;

    let title = "";
    let cardArray = [];

    if (page === "animals") {
        title = "Animals";
        const animalTypes = getAnimalTypes();
        cardArray = animalTypes.map((animalType) => ({
            id: animalType.id,
            title: animalType.label,
            url: animalType.url,
            image: `/assets/cards/animals/types/${animalType.id}.png`,
        }));
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>
            <div className={styles.links}>
                {cardArray.map((card) => (
                    <Card key={card.id} cardData={card} />
                ))}
            </div>
        </div>
    );
}

export default Animals;
