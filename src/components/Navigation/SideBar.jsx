import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";
import { menu, getMenuItem } from "../../db/menu";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import PetsIcon from "@mui/icons-material/Pets";
import PersonIcon from "@mui/icons-material/Person";
import ConstructionIcon from "@mui/icons-material/Construction";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedItems, setSelectedItems] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    const animals = useSelector((state) => state.animals);

    // function renderChildren(menuItems) {
    //     return menuItems.map((menuItem) => (
    //         <TreeItem key={menuItem.id} itemId={menuItem.id} label={menuItem.plural}>
    //             {menuItem.children && renderChildren(menuItem.children)}
    //         </TreeItem>
    //     ));
    // }

    // useEffect(() => {
    //     const menuItem = getMenuItem({ url: location.pathname });
    //     const selectedArray = [menuItem?.id];
    //     setSelectedItems(selectedArray);
    //     setExpandedItems(getExpandedItems);
    // }, [location.pathname]);

    // function getExpandedItems() {
    //     const routeArray = location.pathname.split("/").filter(Boolean);
    //     const expandedMenuItems = [];
    //     let currentPath = "";
    //     for (const route of routeArray) {
    //         currentPath += `/${route}`;
    //         const menuItem = getMenuItem({ url: currentPath });
    //         if (menuItem) {
    //             expandedMenuItems.push(menuItem.id);
    //         }
    //     }
    //     return expandedMenuItems;
    // }

    // function handleSelectedItemsChange(event, id) {
    //     const navigationItem = getMenuItem({ id: id });
    //     navigate(navigationItem.url);
    // }

    return (
        <div className={styles.container}>
            <List>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 32, marginLeft: 1, marginRight: 1, color: "black" }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 32, marginLeft: 1, marginRight: 1, color: "black" }}>
                            <PetsIcon />
                        </ListItemIcon>
                        <ListItemText>Animals</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 32, marginLeft: 1, marginRight: 1, color: "black" }}>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Contacts</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: 32, marginLeft: 1, marginRight: 1, color: "black" }}>
                            <AssignmentIcon />
                        </ListItemIcon>
                        <ListItemText>Projects</ListItemText>
                    </ListItemButton>
                </ListItem>
                <Divider />
            </List>
            {/* <SimpleTreeView
                selectedItems={selectedItems}
                expandedItems={expandedItems}
                onSelectedItemsChange={handleSelectedItemsChange}
                sx={{
                    "& .MuiTreeItem-content": {
                        height: 36,
                        minHeight: 36,
                        lineHeight: "36px",
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
                {menu.map((menuItem) => (
                    <TreeItem key={menuItem.id} itemId={menuItem.id} label={menuItem.plural}>
                        {menuItem.children && renderChildren(menuItem.children)}
                    </TreeItem>
                ))}
            </SimpleTreeView> */}
        </div>
    );
}

export default SideBar;
