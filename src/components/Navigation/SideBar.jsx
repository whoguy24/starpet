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

    const [expandedItems, setExpandedItems] = useState([
        "/home/animals",
        "/home/contacts",
        "/home/organizations",
        "/home/projects",
    ]);
    const [selectedItems, setSelectedItems] = useState(["/home"]);

    // useEffect(() => {
    //     const url = location.pathname;
    //     const parts = url.split("/").filter(Boolean);
    //     const ancestors = parts.slice(0, -1).map((_, index) => "/" + parts.slice(0, index + 1).join("/"));
    //     setExpandedItems(ancestors);
    // }, [location.pathname]);

    const handleSelectedItemsChange = (event, ids) => {
        navigate(ids);
    };

    const handleExpandedItemsChange = (event, itemIds) => {
        setExpandedItems(itemIds);
    };

    return (
        <div className={styles.container}>
            {/* <Link to="/home">Home</Link>
            <Link to="/home/animals">Animals</Link>
            <Link to="/home/contacts">Contacts</Link>
            <Link to="/home/organizations">Organizations</Link>
            <Link to="/home/projects">Projects</Link> */}
            <SimpleTreeView
                selectedItems={location.pathname}
                expandedItems={expandedItems}
                onSelectedItemsChange={handleSelectedItemsChange}
                onExpandedItemsChange={handleExpandedItemsChange}
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
                <TreeItem itemId="/home" label="Home" />
                <TreeItem itemId="/home/animals" label="Animals">
                    {getAnimalTypes().map((animalType) => (
                        <TreeItem
                            key={animalType.key}
                            itemId={`/home/animals/${getRoute(animalType.key)}`}
                            label={animalType.plural}
                        >
                            {getAnimalCategories({ type: animalType.key }).map((animalCategory) => (
                                <TreeItem
                                    key={animalCategory.key}
                                    itemId={`/home/animals/${getRoute(animalCategory.type)}/${getRoute(
                                        animalCategory.key,
                                    )}`}
                                    label={animalCategory.plural}
                                >
                                    {getAnimalBreeds({ category: animalCategory.key }).map((animalBreed) => (
                                        <TreeItem
                                            key={animalBreed.key}
                                            itemId={`/home/animals/${getRoute(animalBreed.type)}/${getRoute(
                                                animalBreed.category,
                                            )}/${getRoute(animalBreed.key)}`}
                                            label={animalBreed.plural}
                                        />
                                    ))}
                                </TreeItem>
                            ))}
                        </TreeItem>
                    ))}
                </TreeItem>
                <TreeItem itemId="/home/contacts" label="Contacts">
                    {getContactTypes().map((contactType) => (
                        <TreeItem
                            key={contactType.key}
                            itemId={`/home/contacts/${getRoute(contactType.key)}`}
                            label={contactType.plural}
                        />
                    ))}
                </TreeItem>
                <TreeItem itemId="/home/organizations" label="Organizations">
                    {getOrganizationTypes().map((organizationType) => (
                        <TreeItem
                            key={organizationType.key}
                            itemId={`/home/organizations/${getRoute(organizationType.key)}`}
                            label={organizationType.plural}
                        />
                    ))}
                </TreeItem>
                <TreeItem itemId="/home/projects" label="Projects">
                    {getProjectTypes().map((projectType) => (
                        <TreeItem
                            key={projectType.key}
                            itemId={`/home/projects/${getRoute(projectType.key)}`}
                            label={projectType.plural}
                        />
                    ))}
                </TreeItem>
            </SimpleTreeView>
        </div>
    );
}

export default SideBar;
