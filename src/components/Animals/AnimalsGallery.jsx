// Import Modules
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./AnimalsGallery.module.css";
import { types } from "../../enums/animals/types";
import Card from "../Navigation/Card";

// Component Function
function AnimalsGallery() {
    // Define Redux State
    const animals = useSelector((state) => state.animals);

    // Filter Animals Based on Type From URL
    const { type } = useParams();

    const key = types.find((types) => types.route === type)?.key;
    const title = types.find((types) => types.route === type)?.plural;

    // Define Local State
    const [animalsTable, setAnimalsTable] = useState([]);

    useEffect(() => {
        setAnimalsTable(animals.filter((animal) => animal.enum_type === key));
    }, [animals, key]);

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.links}>
                    {animalsTable.map((animal) => (
                        <Card key={animal.id} path={`/home/animals/dogs/${animal.id}`} title={animal.name} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// Export Component Function
export default AnimalsGallery;
