// Import Modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./AnimalsBreed.module.css";
import Card from "../Navigation/Card";
import AnimalForm from "../Forms/AnimalForm";

// MUI
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import { getRoute, getKey } from "../../utils/slugify";
import { getAnimalType } from "../../enums/animal.types";
import { getAnimalCategory } from "../../enums/animal.categories";
import { getAnimalBreed } from "../../enums/animal.breeds";

// Component Function
function AnimalsBreed() {
    // Define Redux State
    const animals = useSelector((state) => state.animals);

    const dispatch = useDispatch();

    // Filter Animals Based on Type From URL
    const { type, category, breed } = useParams();

    const animalType = getAnimalType(getKey(type));
    const animalCategory = getAnimalCategory(getKey(category), getKey(type));
    const animalBreed = getAnimalBreed(getKey(breed), getKey(type), getKey(category));

    // Define Local State
    const [animalsTable, setAnimalsTable] = useState([]);
    // const [open, setOpen] = useState(false);

    useEffect(() => {
        setAnimalsTable(
            animals.filter(
                (animal) =>
                    animal.enum_type === animalType.key &&
                    animal.enum_category === animalCategory.key &&
                    animal.enum_breed === animalBreed.key,
            ),
        );
    }, [animals]);

    // function debug() {
    //     dispatch({
    //         type: "CREATE_ANIMAL",
    //         payload: {
    //             contact_ID: "weod4ofF1WzsdChzCPFX",
    //             name: "Kipling",
    //             enum_type: "dog",
    //             enum_category: "terrier",
    //             enum_breed: "australian_terrier",
    //             enum_flag: "green",
    //             enum_sex: "male",
    //             enum_size: "small",
    //             description: "Australian Terrier",
    //             color: "Brown",
    //             skills: {
    //                 down_stay: true,
    //                 sit_stay: true,
    //                 stand_stay: true,
    //             },
    //             notes: "Good Boy.",
    //             active: true,
    //         },
    //     });
    // }

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <h2>{animalBreed.plural}</h2>
                </div>
                <div className={styles.links}>
                    {animalsTable.map((animal) => (
                        <Card
                            key={animal.id}
                            path={`/home/animals/${type}/${category}/${breed}/${animal.id}`}
                            imagePath={`/debug/${animal.id}.jpg`}
                            title={animal.name}
                        />
                    ))}
                </div>
            </div>
            {/* <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Dog</DialogTitle>
                <DialogContent sx={{ width: 1200 }}></DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={debug}>Add Dog</Button>
                </DialogActions>
            </Dialog> */}
        </div>
    );
}

// Export Component Function
export default AnimalsBreed;
