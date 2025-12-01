import styles from "./Animals.module.css";
import Card from "../Navigation/Card";
import { getAnimalTypes } from "../../enums/animal.types";
import { getRoute } from "../../utils/slugify";

function Animals() {
    // const animalTypes = getAnimalTypes();

    return (
        <div className={styles.container}>
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
