// Import Modules
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./AnimalsGallery.module.css";
import { types } from "../../enums/animals/types";

// Component Function
function AnimalsGallery() {
    // Define Redux State
    const animals = useSelector((state) => state.animals);

    // Filter Animals Based on Type From URL
    const { type } = useParams();
    const typeKey = types.find((types) => types.navigation === type)?.key;

    // Define Local State
    const [animalsTable, setAnimalsTable] = useState([]);

    useEffect(() => {
        setAnimalsTable(
            animals.filter((animal) => animal.enum_type === typeKey),
        );
    }, [animals, typeKey]);

    // Render DOM
    return (
        <div>
            <table border="1" cellPadding="8" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Animal Name</th>
                    </tr>
                </thead>
                <tbody>
                    {animalsTable?.map((animal) => (
                        <tr key={animal.id}>
                            <td>
                                <Link to={`/animals/${type}/${animal.id}`}>
                                    {animal.name}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Export Component Function
export default AnimalsGallery;
