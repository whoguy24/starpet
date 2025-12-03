import styles from "./AnimalsNew.module.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { useState } from "react";

function AnimalsNew({ open, onClose }) {
    const [activeStep, setActiveStep] = useState(0);

    const steps = ["Start", "Profile", "Review"];

    return (
        <Dialog open={open} onClose={() => onClose(false)}>
            <DialogTitle>New Animal</DialogTitle>
            <DialogContent>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </DialogContent>
            <DialogActions>
                {activeStep > 0 && <Button onClick={() => setActiveStep(activeStep - 1)}>Previous</Button>}
                <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AnimalsNew;
