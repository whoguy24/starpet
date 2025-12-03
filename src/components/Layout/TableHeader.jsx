import styles from "./TableHeader.module.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function TableHeader({ title, imageURL, onNew }) {
    const newButtonStyle = {
        fontWeight: "bold",
        backgroundColor: "var(--color-primary)",
        color: "white",
        borderRadius: "30px",
        height: "30px",
        letterSpacing: "2px",
        fontSize: "16px",
        "&:hover": {
            backgroundColor: "var(--color-primary-hover)",
        },
    };
    return (
        <div className={styles.container}>
            <img className={styles.titleImage} src={imageURL} />
            <div className={styles.rowContainer}>
                <h1 className={styles.title}>{title}</h1>
                <Button
                    className={styles.newButton}
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={onNew}
                    sx={newButtonStyle}
                >
                    New
                </Button>
            </div>
        </div>
    );
}

export default TableHeader;
