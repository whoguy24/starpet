import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SideBar.module.css";
import { menu, getMenuItem } from "../../db/menu";
import Divider from "@mui/material/Divider";

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
        const dynamicallyExpanded = location.pathname.replace(/-/g, "_").split("/").filter(Boolean);
        const alwaysExpanded = menu.map((item) => item.id);
        const mergedExpanded = [...new Set([...alwaysExpanded, ...dynamicallyExpanded])];
        setExpandedItems(mergedExpanded);
    }, [location.pathname]);

    function handleSelectedItemsChange(e, id) {
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
                    },
                    "& .MuiTreeItem-content.Mui-selected": {
                        backgroundColor: "var(--color-primary)",
                        color: "white",
                        borderRadius: 0,
                        fontWeight: "bold",
                    },
                    "& .MuiTreeItem-content.Mui-selected:hover": {
                        backgroundColor: "var(--color-primary)",
                        color: "white",
                    },
                }}
            >
                {menu.map((menuItem) => (
                    <TreeItem key={menuItem.id} itemId={menuItem.id} label={menuItem.label}>
                        {menuItem.children && renderChildren(menuItem.children)}
                    </TreeItem>
                ))}
            </SimpleTreeView>
        </div>
    );
}

export default SideBar;
