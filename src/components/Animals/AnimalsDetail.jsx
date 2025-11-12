// Import Modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./AnimalsDetail.module.css";
import { useSelector } from "react-redux";

// Component Function
function AnimalsDetail() {
    const { id } = useParams();
    const animals = useSelector((state) => state.animals);

    const [animalData, setAnimalData] = useState({});

    useEffect(() => {
        setAnimalData(animals.find((animal) => animal.id === id));
    }, [animals, id]);

    // Render DOM
    return (
        <div>
            <h4>Name: {animalData.name}</h4>
            <p>Description: {animalData.description}</p>
            <p>Type: {animalData.enum_type}</p>
            <p>Category: {animalData.enum_category}</p>
            <p>Breed: {animalData.enum_breed}</p>
            <p>Sex: {animalData.enum_sex}</p>
            <p>Flag: {animalData.enum_flag}</p>
            <p>Color: {animalData.color}</p>
            <p>Notes: {animalData.notes}</p>
        </div>
    );
}

// Export Component Function
export default AnimalsDetail;
