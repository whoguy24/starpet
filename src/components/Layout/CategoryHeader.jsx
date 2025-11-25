import styles from "./CategoryHeader.module.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function CategoryHeader({ title, imageURL, onNew, onAction, onSort, onFilter }) {
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
    const menuButtonStyle = {
        fontWeight: "regular",
        backgroundColor: "none",
        color: "black",
        height: "24px",
        fontSize: "14px",
        padding: 0,
        minWidth: 0,
        "&:hover": {
            backgroundColor: "white",
            color: "var(--color-primary-hover)",
        },
        "&:active": {
            backgroundColor: "none",
        },
    };
    return (
        <div className={styles.container}>
            <img className={styles.titleImage} src={imageURL} />
            <div className={styles.rowContainer}>
                <div className={styles.titleRow}>
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
                <div className={styles.actionsRow}>
                    <div className={styles.actionsRowTop}>
                        <Button className={styles.menuButton} onClick={onSort} disableRipple sx={menuButtonStyle}>
                            Sort
                        </Button>
                        <Button className={styles.menuButton} onClick={onFilter} disableRipple sx={menuButtonStyle}>
                            Filter
                        </Button>
                        <Button className={styles.menuButton} onClick={onAction} disableRipple sx={menuButtonStyle}>
                            Actions
                        </Button>
                    </div>
                    <div className={styles.actionsRowBottom}></div>
                </div>
            </div>
        </div>
    );
}

export default CategoryHeader;
