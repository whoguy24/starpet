import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";
import { getAnimalBreeds } from "../../enums/animal.breeds";
import { getContactTypes } from "../../enums/contact.types";
import { getOrganizationTypes } from "../../enums/organization.types";
import { getProjectTypes } from "../../enums/project.types";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

import { useState, useEffect } from "react";

import { useNavigate, useLocation, Link } from "react-router-dom";

import { getRoute } from "../../utils/slugify";

import styles from "./SideBar.module.css";

function SideBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const routeArray = location.pathname.split("/").filter(Boolean);

    console.log(routeArray);

    const [selectedItems, setSelectedItems] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    return (
        <div className={styles.container}>
            <SimpleTreeView
                selectedItems={selectedItems}
                expandedItems={expandedItems}
                // onSelectedItemsChange={handleSelectedItemsChange}
                // onExpandedItemsChange={handleExpandedItemsChange}
                sx={{
                    "& .MuiTreeItem-content.Mui-selected": {
                        backgroundColor: "var(--color-primary)",
                        color: "white",
                        borderRadius: 0,
                        fontWeight: "bold",
                    },
                    "& .MuiTreeItem-content:hover": {
                        backgroundColor: "var(--color-tertiary)",
                    },
                    "& .MuiTreeItem-content.Mui-selected:hover": {
                        backgroundColor: "var(--color-primary)",
                    },
                }}
            >
                <TreeItem itemId="home" label="Owners" />
                <TreeItem itemId="animals" label="Professional" />
                <TreeItem itemId="contacts" label="Crew" />
            </SimpleTreeView>
        </div>
    );
}

export default SideBar;
