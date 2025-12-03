import styles from "./AnimalsNew.module.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Divider from "@mui/material/Divider";

import { useState } from "react";

function AnimalsNew({ open, onClose }) {
    const [activeStep, setActiveStep] = useState(0);

    const steps = ["Start", "Profile", "Review"];

    function handleSaveButton() {
        console.log(activeStep);
    }

    function handleOnClose() {
        onClose(false);
        setActiveStep(0);
    }

    return (
        <Dialog
            open={open}
            onClose={handleOnClose}
            sx={{
                "& .MuiPaper-root": {
                    minWidth: "60%",
                    minHeight: "60%",
                },
            }}
        >
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
                <div className={styles.dialogButtonsContainer}>
                    <Button onClick={() => setActiveStep(activeStep - 1)}>Previous</Button>
                    <div>
                        <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
                        <Button onClick={handleSaveButton}>Save</Button>
                    </div>
                </div>
            </DialogActions>
        </Dialog>
    );
}

export default AnimalsNew;
