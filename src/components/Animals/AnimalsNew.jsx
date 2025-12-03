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

import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";
import { getAnimalBreeds } from "../../enums/animal.breeds";

import { useState, useEffect } from "react";

function AnimalsNew({ open, onClose }) {
    const [activeStep, setActiveStep] = useState(0);

    const [newAnimal, setNewAnimal] = useState({});

    const [enumType, setEnumType] = useState({});
    const [enumCategory, setEnumCategory] = useState({});
    const [enumBreed, setEnumBreed] = useState({});
    const [inputName, setInputName] = useState("");
    const [inputColor, setInputColor] = useState("");
    const [inputContactID, setInputContactID] = useState("");

    const steps = ["Start", "Profile", "Review"];

    useEffect(() => {
        console.log(newAnimal);
    }, [newAnimal]);

    function handleOnClose() {
        onClose(false);
        setActiveStep(0);
        setNewAnimal(null);
    }

    return (
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
                                onChange={(event) => setInputName(event.target.value)}
                            />
                            <TextField
                                label="Color"
                                variant="outlined"
                                value={inputColor}
                                onChange={(event) => setInputColor(event.target.value)}
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
                        {activeStep === 2 && <Button onClick={handleOnClose}>Save</Button>}
                    </div>
                </div>
            </DialogActions>
        </Dialog>
    );
}

export default AnimalsNew;
