import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ data }) {
    return (
        <Link to={data.url} className={styles.container}>
            <img
                className={styles.cardImage}
                src={data.cardPath}
                onError={(event) => {
                    event.currentTarget.src = "/assets/cards/placeholder.png";
                }}
            />
            <h3 className={styles.cardTitle}>{data.label}</h3>
        </Link>
    );
}

export default Card;
