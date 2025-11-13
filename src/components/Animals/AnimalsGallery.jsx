// Import Modules
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./AnimalsGallery.module.css";
import { types } from "../../enums/animals/types";
import Card from "../Navigation/Card";

// Component Function
function AnimalsGallery() {
    // Define Redux State
    const animals = useSelector((state) => state.animals);

    const dispatch = useDispatch();

    // Filter Animals Based on Type From URL
    const { type } = useParams();

    const key = types.find((types) => types.route === type)?.key;
    const title = types.find((types) => types.route === type)?.plural;

    // Define Local State
    const [animalsTable, setAnimalsTable] = useState([]);

    useEffect(() => {
        setAnimalsTable(animals.filter((animal) => animal.enum_type === key));
    }, [animals, key]);

    // function debug() {
    //     dispatch({
    //         type: "CREATE_ANIMAL",
    //         payload: {
    //             contact_ID: "weod4ofF1WzsdChzCPFX",
    //             name: "Miss Sparky",
    //             enum_type: "dog",
    //             enum_category: "toy",
    //             enum_breed: "pomeranian",
    //             enum_flag: "red",
    //             enum_sex: "female",
    //             enum_size: "extra_small",
    //             description: "White Pomeranian",
    //             color: "White",
    //             skills: {
    //                 down_stay: false,
    //                 sit_stay: false,
    //                 stand_stay: false,
    //             },
    //             notes: "Very fussy.",
    //             active: true,
    //         },
    //     });
    // }

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <h2>{title}</h2>
                </div>
                {/* <button onClick={debug}>Add</button> */}
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
