import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";
import { menu, getMenuItem } from "../../db/menu";

function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [selectedItems, setSelectedItems] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    function renderChildren(menuItems) {
        return menuItems.map((menuItem) => (
            <TreeItem key={menuItem.id} itemId={menuItem.id} label={menuItem.plural}>
                {menuItem.children && renderChildren(menuItem.children)}
            </TreeItem>
        ));
    }

    useEffect(() => {
        const menuItem = getMenuItem({ url: location.pathname });
        const selectedArray = [menuItem?.id];
        setSelectedItems(selectedArray);
        setExpandedItems(getExpandedItems);
    }, [location.pathname]);

    function getExpandedItems() {
        const routeArray = location.pathname.split("/").filter(Boolean);
        const expandedMenuItems = [];
        let currentPath = "";
        for (const route of routeArray) {
            currentPath += `/${route}`;
            const menuItem = getMenuItem({ url: currentPath });
            if (menuItem) {
                expandedMenuItems.push(menuItem.id);
            }
        }
        return expandedMenuItems;
    }

    function handleSelectedItemsChange(event, id) {
        const navigationItem = getMenuItem({ id: id });
        navigate(navigationItem.url);
    }

    return (
        <div className={styles.container}>
            <SimpleTreeView
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
            </SimpleTreeView>
        </div>
    );
}

export default SideBar;
