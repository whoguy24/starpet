//Import Modules
import { Link } from "react-router-dom";
import Card from "../Navigation/Card";
import styles from "./Home.module.css";

// Component Function
function Home() {
    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <h2>Welcome to StarPet!</h2>
                    <p>Click one of the links below to begin:</p>
                </div>

                <div className={styles.cardContainer}>
                    <Card path="/home/animals" title="Animals" />
                    <Card path="/home/contacts" title="Contacts" />
                    <Card path="/home/projects" title="Projects" />
                </div>
            </div>
        </div>
    );
}

// Export Component
export default Home;
