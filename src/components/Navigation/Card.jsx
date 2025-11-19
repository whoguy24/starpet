// Import Modules
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

// Component Function
function Card({ path, imagePath, title }) {
    // Render DOM
    return (
        <Link to={path} className={styles.container}>
            <img
                className={styles.cardImage}
                src={imagePath}
                onError={(event) => {
                    event.currentTarget.src = "/assets/cards/placeholder.png";
                }}
                alt="StarPet Logo"
            />
            <h3 className={styles.cardTitle}>{title}</h3>
        </Link>
    );
}

// Export Component Function
export default Card;
