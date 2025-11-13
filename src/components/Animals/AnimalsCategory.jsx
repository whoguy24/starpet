// Import Modules
import styles from "./AnimalsCategory.module.css";
import Card from "../Navigation/Card";

// Component Function
function AnimalsCategory() {
    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.header}>Animals</h2>
                <div className={styles.links}>
                    <Card path={"/home/animals/dogs"} title={"Dogs"} />
                    <Card path={"/home/animals/cats"} title={"Cats"} />
                    <Card path={"/home/animals/horses"} title={"Horses"} />
                    <Card path={"/home/animals/livestock"} title={"Livestock"} />
                    <Card path={"/home/animals/small-pets"} title={"Small Pets"} />
                    <Card path={"/home/animals/other"} title={"Other"} />
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default AnimalsCategory;
