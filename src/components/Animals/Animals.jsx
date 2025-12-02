import styles from "./Animals.module.css";

import AnimalsGallery from "./AnimalsGallery";
import AnimalsList from "./AnimalsList";

function Animals({ view }) {
    return (
        <div className={styles.container}>
            {view === "gallery" && <AnimalsGallery />}
            {view === "list" && <AnimalsList />}
        </div>
    );
}

export default Animals;
