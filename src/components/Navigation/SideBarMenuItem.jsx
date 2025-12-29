import styles from "./SideBarMenuItem.module.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

function SideBarMenuItem({ menuItemData }) {
    const animals = useSelector((state) => state.animals);

    getAnimalMenu();

    function getAnimalMenu() {
        let animalMenu = [];
        const animalTypes = Array.from(new Set(animals.map((animal) => animal.enum_type)));
        return animalMenu;
    }

    return (
        <div>
            <ListItem disablePadding>
                <ListItemButton
                    sx={{
                        height: 36,
                    }}
                >
                    <ListItemText
                        sx={{
                            "& .MuiListItemText-primary": {
                                color: "var(--color-primary)",
                                fontWeight: 700,
                            },
                        }}
                    >
                        {menuItemData.label.plural}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
            <SimpleTreeView
                selectedItems={[]}
                expandedItems={[]}
                sx={{
                    "& .MuiTreeItem-content": {
                        height: 30,
                        minHeight: 30,
                        lineHeight: "30px",
                        transition: "background-color 0.2s",
                        borderRadius: 0,
                    },
                    "& .MuiTreeItem-content.Mui-selected": {
                        backgroundColor: "var(--color-primary)",
                        color: "white",
                    },
                    "& .MuiTreeItem-content.Mui-selected:hover": {
                        backgroundColor: "var(--color-primary)",
                        color: "white",
                    },
                    "& .MuiTreeItem-content.Mui-selected:focused": {
                        backgroundColor: "var(--color-primary)",
                        color: "white",
                    },
                    "& .MuiTreeItem-content:hover": {
                        backgroundColor: "var(--color-tertiary)",
                    },
                    "& .MuiTreeItem-content.focus": {
                        backgroundColor: "var(--color-primary)",
                    },
                    "& .MuiTreeItem-content:active": {
                        backgroundColor: "var(--color-tertiary)",
                    },
                    "& .MuiTreeItem-content.Mui-selected .MuiTreeItem-label": {
                        color: "white",
                    },
                }}
            >
                {/* {getAnimalMenu().map((animalType) => (
                    <TreeItem key={animalType.id} itemId={animalType.id} label={animalType.label}></TreeItem>
                ))} */}
            </SimpleTreeView>
            <Divider />
        </div>
    );
}

export default SideBarMenuItem;
