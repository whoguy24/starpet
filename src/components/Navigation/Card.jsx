// Import Modules
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

// Component Function
function Card({ path, title }) {
    // Render DOM
    return (
        <Link to={path} className={styles.card}>
            <h3>{title}</h3>
        </Link>
    );
}

// Export Component Function
export default Card;
