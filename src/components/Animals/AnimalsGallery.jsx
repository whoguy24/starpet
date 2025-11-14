// Import Modules
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./AnimalsGallery.module.css";
import { types } from "../../enums/animals/types";
import { categories } from "../../enums/animals/categories";
import Card from "../Navigation/Card";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Component Function
function AnimalsGallery() {
    // Define Redux State
    const animals = useSelector((state) => state.animals);

    const dispatch = useDispatch();

    // Filter Animals Based on Type From URL
    const { type, category } = useParams();

    const typeKey = types.find((types) => types.route === type)?.key;
    const categoryKey = categories[typeKey].find((categories) => categories.route === category)?.key;
    const title = types.find((types) => types.route === type)?.plural;

    // Define Local State
    const [animalsTable, setAnimalsTable] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setAnimalsTable(animals.filter((animal) => animal.enum_type === typeKey && animal.enum_category === categoryKey ));
    }, [animals, typeKey]);

    function debug() {
        dispatch({
            type: "CREATE_ANIMAL",
            payload: {
                contact_ID: "weod4ofF1WzsdChzCPFX",
                name: "Kipling",
                enum_type: "dog",
                enum_category: "toy",
                enum_breed: "australian_terrier",
                enum_flag: "green",
                enum_sex: "male",
                enum_size: "small",
                description: "Australian Terrier",
                color: "Brown",
                skills: {
                    down_stay: true,
                    sit_stay: true,
                    stand_stay: true,
                },
                notes: "Good Boy.",
                active: true,
            },
        });
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleClose();
    };

    // Render DOM
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.header}>
                    <h2>{title}</h2>
                </div>
                <Button onClick={handleClickOpen}>Add a Dog</Button>
                <div className={styles.links}>
                    {animalsTable.map((animal) => (
                        <Card key={animal.id} path={`/home/animals/${type}/${category}/${animal.id}`} title={animal.name} />
                    ))}
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Dog</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Name"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Breed"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Color"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={debug}>Add Dog</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

// Export Component Function
export default AnimalsGallery;
