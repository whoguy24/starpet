import styles from "./Animals.module.css";
import Card from "../Navigation/Card";
import { getAnimalTypes } from "../../enums/animal.types";
import { getRoute } from "../../utils/slugify";
import { useParams } from "react-router-dom";
import { getView } from "../../utils/session";
import { useState, useEffect } from "react";

function Animals({ view }) {
    const { type, category, breed, id } = useParams();

    return (
        <div className={styles.container}>
            {view === "explore" && <p>EXPLORE</p>}
            {view === "gallery" && <p>GALLERY</p>}
            {view === "list" && <p>LIST</p>}

            {/* <div>
                <h2 className={styles.header}>ANIMALS</h2>
                <div className={styles.links}>
                    {animalTypes.map((animalType) => (
                        <Card
                            key={animalType.key}
                            path={`/home/animals/${getRoute(animalType.key)}`}
                            imagePath={`/assets/cards/animals/types/${animalType.key}.png`}
                            title={animalType.plural}
                        />
                    ))}
                </div>
            </div> */}
        </div>
    );
}

export default Animals;
