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
                    <Card
                        cardData={{
                            url: "/home/animals",
                            image: "/assets/cards/home/animals.png",
                            title: "ANIMALS",
                        }}
                    />
                    <Card
                        cardData={{
                            url: "/home/contacts",
                            image: "/assets/cards/home/contacts.png",
                            title: "CONTACTS",
                        }}
                    />
                    <Card
                        cardData={{
                            url: "/home/projects",
                            image: "/assets/cards/home/projects.png",
                            title: "PROJECTS",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

// Export Component
export default Home;
