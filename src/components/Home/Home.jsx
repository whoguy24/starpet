//Import Modules
import Card from "../Navigation/Card";
import styles from "./Home.module.css";

// Component Function
function Home() {
    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <h2>WELCOME TO STAR PET</h2>
                </div>

                <div className={styles.cardContainer}>
                    <Card path="/home/animals" imagePath="/assets/cards/animals.png" title="ANIMALS" />
                    <Card path="/home/contacts" imagePath="/assets/cards/contacts.png" title="CONTACTS" />
                    <Card path="/home/projects" imagePath="/assets/cards/projects.png" title="PROJECTS" />
                </div>
            </div>
        </div>
    );
}

// Export Component
export default Home;
