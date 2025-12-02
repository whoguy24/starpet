import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import styles from "./ToggleView.module.css";

function ToggleView({ view, setView }) {
    return (
        <div className={styles.containerToggle}>
            <ToggleButtonGroup
                className={styles.toggleGroup}
                value={view}
                onChange={(event, value) => setView(value)}
                exclusive
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
                    <span style={{ fontSize: 10 }}>Gallery</span>
                </ToggleButton>
                <ToggleButton value="list">
                    <span style={{ fontSize: 10 }}>List</span>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

// Export Component Function
export default ToggleView;
