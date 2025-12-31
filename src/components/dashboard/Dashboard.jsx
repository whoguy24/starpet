import Card from "../Navigation/Card";
import styles from "./Dashboard.module.css";
import { pages, getPage } from "../../db/pages";

function Dashboard() {
    const links = ["projects", "animals", "contacts", "organizations", "settings"];
    const cards = links.map((card) => getPage({ id: card }));

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.cardContainer}>
                    {cards.map((card) => (
                        <Card key={card.id} data={card} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export Component
export default Dashboard;
