import styles from "./AnimalCard.module.css";
import { Link } from "react-router-dom";
import { getRoute } from "../../utils/slugify";

function AnimalCard({ animal }) {
    const path = `/home/animals/${getRoute(animal.enum_type)}/${getRoute(animal.enum_category)}/${getRoute(
        animal.enum_breed,
    )}/${animal.id}`;
    return (
        <div className={styles.container}>
            <Link to={path}>
                <img
                    className={styles.image}
                    src={`/assets/debug/animals/${animal.id}.jpg`}
                    onError={(event) => {
                        event.currentTarget.src = "/assets/cards/placeholder.png";
                    }}
                />
            </Link>
            <Link to={path} className={styles.link}>
                {animal.name}
            </Link>
        </div>
    );
}

export default AnimalCard;
