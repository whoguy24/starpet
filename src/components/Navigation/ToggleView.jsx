import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ListIcon from "@mui/icons-material/List";
import CollectionsIcon from "@mui/icons-material/Collections";
import styles from "./ToggleView.module.css";

function ToggleView() {
    const [view, setView] = useState("gallery");

    return (
        <div className={styles.containerToggle}>
            <ToggleButtonGroup
                className={styles.toggleGroup}
                value={view}
                exclusive
                onChange={(e, newView) => setView(newView)}
                aria-label="Toggle View"
                sx={{
                    height: 30,
                    p: 0,
                    m: 0,
                    display: "flex",
                    alignItems: "center",
                    "& .MuiToggleButton-root": {
                        p: 0,
                        minWidth: 70,
                        minHeight: 20,
                        lineHeight: 1,
                        gap: 0.5,
                        textTransform: "none",
                    },
                    "& .MuiSvgIcon-root": {
                        fontSize: 14,
                        lineHeight: 1,
                    },
                }}
            >
                <ToggleButton value="gallery">
                    <CollectionsIcon />
                    <span style={{ fontSize: 10 }}>Gallery</span>
                </ToggleButton>
                <ToggleButton value="list">
                    <ListIcon />
                    <span style={{ fontSize: 10 }}>List</span>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

// Export Component Function
export default ToggleView;
