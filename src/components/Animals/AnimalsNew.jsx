import styles from "./AnimalsNew.module.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";
import { getAnimalBreeds } from "../../enums/animal.breeds";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function AnimalsNew({ open, onClose }) {
    const dispatch = useDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const [snackbarOpen, setSnackbarOpen] = useState(0);

    const [newAnimal, setNewAnimal] = useState({});

    const [enumType, setEnumType] = useState({});
    const [enumCategory, setEnumCategory] = useState({});
    const [enumBreed, setEnumBreed] = useState({});
    const [inputName, setInputName] = useState("");
    const [inputContactID, setInputContactID] = useState({});
    const [inputSex, setInputSex] = useState("");
    const [inputColor, setInputColor] = useState("");

    const contacts = useSelector((state) => state.contacts);

    const steps = ["Start", "Profile", "Owner"];

    useEffect(() => {
        console.log(newAnimal);
    }, [newAnimal]);

    function handleOnClose() {
        onClose(false);
        setActiveStep(0);
        setNewAnimal(null);
        setEnumType({});
        setEnumCategory({});
        setEnumBreed({});
        setInputName("");
        setInputContactID({});
    }

    function handleOnSave() {
        if (newAnimal.name) {
            dispatch({
                type: "CREATE_ANIMAL",
                payload: {
                    contact_ID: newAnimal.contact_ID,
                    name: newAnimal.name,
                    enum_type: newAnimal.enum_type,
                    enum_category: newAnimal.enum_category,
                    enum_breed: newAnimal.enum_breed,
                    color: newAnimal.color,
                    enum_sex: newAnimal.enum_sex,
                    active: true,
                    enum_flag: "green",
                },
            });
        }
        handleOnClose();
        setSnackbarOpen(true);
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleOnClose}
                sx={{
                    "& .MuiPaper-root": {
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "60%",
                        minHeight: "60%",
                    },
                }}
            >
                <DialogContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <div className={styles.dialogHeaderContainer}>
                        <img
                            className={styles.headerImage}
                            src={"/assets/cards/home/animals.png"}
                            onError={(event) => {
                                event.currentTarget.src = "/assets/cards/placeholder.png";
                            }}
                        />
                        <div className={styles.dialogHeader}>
                            <div className={styles.dialogHeaderTop}>
                                <h3 className={styles.dialogHeaderTitle}>Add New Animal</h3>
                                <Button onClick={handleOnClose}>Cancel</Button>
                            </div>
                            <Divider />
                        </div>
                    </div>

                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div className={styles.dialogContentContainer}>
                        {activeStep === 0 && (
                            <>
                                <Autocomplete
                                    disablePortal
                                    options={getAnimalTypes()}
                                    value={enumType}
                                    isOptionEqualToValue={(option, value) => option.key === value.key}
                                    getOptionLabel={(option) => option?.label || ""}
                                    renderInput={(params) => <TextField {...params} label="Type" />}
                                    sx={{ width: 300 }}
                                    onChange={(e, value) => {
                                        setEnumType(value);
                                        setNewAnimal((prev) => ({ ...prev, enum_type: value ? value.key : null }));
                                    }}
                                />
                                <Autocomplete
                                    disablePortal
                                    options={getAnimalCategories({ type: enumType.key })}
                                    value={enumCategory}
                                    isOptionEqualToValue={(option, value) => option.key === value.key}
                                    getOptionLabel={(option) => option?.label || ""}
                                    renderInput={(params) => <TextField {...params} label="Category" />}
                                    sx={{ width: 300 }}
                                    onChange={(e, value) => {
                                        setEnumCategory(value);
                                        setNewAnimal((prev) => ({ ...prev, enum_category: value ? value.key : null }));
                                    }}
                                />
                                <Autocomplete
                                    disablePortal
                                    options={getAnimalBreeds({ type: enumType.key, category: enumCategory.key })}
                                    value={enumBreed}
                                    isOptionEqualToValue={(option, value) => option.key === value.key}
                                    getOptionLabel={(option) => option?.label || ""}
                                    renderInput={(params) => <TextField {...params} label="Breed" />}
                                    sx={{ width: 300 }}
                                    onChange={(e, value) => {
                                        setEnumBreed(value);
                                        setNewAnimal((prev) => ({ ...prev, enum_breed: value ? value.key : null }));
                                    }}
                                />
                            </>
                        )}
                        {activeStep === 1 && (
                            <>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    value={inputName}
                                    onChange={(event) => {
                                        setInputName(event.target.value);
                                        setNewAnimal((prev) => ({ ...prev, name: event.target.value }));
                                    }}
                                />
                                <TextField
                                    label="Color"
                                    variant="outlined"
                                    value={inputColor}
                                    onChange={(event) => {
                                        setInputColor(event.target.value);
                                        setNewAnimal((prev) => ({ ...prev, color: event.target.value }));
                                    }}
                                />
                                <TextField
                                    label="Sex"
                                    variant="outlined"
                                    value={inputSex}
                                    onChange={(event) => {
                                        setInputSex(event.target.value);
                                        setNewAnimal((prev) => ({ ...prev, enum_sex: event.target.value }));
                                    }}
                                />
                            </>
                        )}
                        {activeStep === 2 && (
                            <>
                                <Autocomplete
                                    disablePortal
                                    options={contacts}
                                    value={inputContactID}
                                    isOptionEqualToValue={(option, value) => option.key === value.id}
                                    getOptionLabel={(option) =>
                                        option ? `${option.first_name || ""} ${option.last_name || ""}`.trim() : ""
                                    }
                                    renderInput={(params) => <TextField {...params} label="Owner" />}
                                    sx={{ width: 300 }}
                                    onChange={(e, value) => {
                                        setInputContactID(value);
                                        setNewAnimal((prev) => ({ ...prev, contact_ID: value ? value.id : null }));
                                    }}
                                />
                            </>
                        )}
                    </div>
                </DialogContent>
                <DialogActions>
                    <div className={styles.dialogButtonsContainer}>
                        <div>
                            {activeStep > 0 && <Button onClick={() => setActiveStep(activeStep - 1)}>Previous</Button>}
                        </div>
                        <div>
                            {activeStep != 2 && <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>}
                            {activeStep === 2 && (
                                <Button onClick={handleOnSave} variant="contained" startIcon={<SaveIcon />}>
                                    Save
                                </Button>
                            )}
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
            <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={() => setSnackbarOpen(false)}>
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Animal was successfully added!
                </Alert>
            </Snackbar>
        </>
    );
}

export default AnimalsNew;
