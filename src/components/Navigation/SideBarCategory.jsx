import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./SideBarCategory.module.css";
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
import SideBarMenuItem from "./SideBarMenuItem";
import { pages, getPage } from "../../db/pages";
import ListSubheader from "@mui/material/ListSubheader";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function SideBarCategory({ category }) {
    const location = useLocation();
    const navigate = useNavigate();

    const [selectedItems, setSelectedItems] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    function handleSelectedItemsChange(event, itemId) {
        const selectedItem = getPage({ id: itemId });
        // if (selectedItem.children.length === 0) {
        //     navigate(selectedItem.url);
        // }
        navigate(selectedItem.url);
    }

    function handleExpandedItemsChange(event, itemIds) {
        if (true) {
            setExpandedItems(itemIds);
        }
    }

    useEffect(() => {
        const routeArray = location.pathname.split("/").filter(Boolean);
        routeArray.pop();
        const newItemIds = routeArray.filter((itemId) => !expandedItems.includes(itemId));
        const updatedExpandedItems = [...expandedItems, ...newItemIds];
        setExpandedItems(updatedExpandedItems);
        const activePage = getPage({ url: location.pathname });
        // if (activePage.children.length === 0) {
        //     setSelectedItems(activePage.id);
        // }
        setSelectedItems(activePage.id);
    }, [location.pathname]);

    return (
        <div className={styles.container}>
            <h4>{category.label}</h4>
            <Divider />
            <SimpleTreeView
                selectedItems={selectedItems}
                expandedItems={expandedItems}
                onSelectedItemsChange={handleSelectedItemsChange}
                onExpandedItemsChange={handleExpandedItemsChange}
            >
                {category.children.map((page) => (
                    <TreeItem key={page.id} itemId={page.id} label={page.label}>
                        {page.children.map((subPage) => (
                            <TreeItem key={subPage.id} itemId={subPage.id} label={subPage.label} />
                        ))}
                    </TreeItem>
                ))}
            </SimpleTreeView>
        </div>
    );
}

export default SideBarCategory;
