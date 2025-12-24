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
                            url: "/animals",
                            image: "/assets/cards/home/animals.png",
                            label: "ANIMALS",
                        }}
                    />
                    <Card
                        cardData={{
                            url: "/contacts",
                            image: "/assets/cards/home/contacts.png",
                            label: "CONTACTS",
                        }}
                    />
                    <Card
                        cardData={{
                            url: "/projects",
                            image: "/assets/cards/home/projects.png",
                            label: "PROJECTS",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

// Export Component
export default Home;
