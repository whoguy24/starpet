import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ cardData }) {
    const { title, url, image } = cardData;
    return (
        <Link to={url} className={styles.container}>
            <img
                className={styles.cardImage}
                src={image}
                onError={(event) => {
                    event.currentTarget.src = "/assets/cards/placeholder.png";
                }}
            />
            <h3 className={styles.cardTitle}>{title}</h3>
        </Link>
    );
}

export default Card;
