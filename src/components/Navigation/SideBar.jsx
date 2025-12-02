import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";
import { getAnimalBreeds } from "../../enums/animal.breeds";
import { getContactTypes } from "../../enums/contact.types";
import { getOrganizationTypes } from "../../enums/organization.types";
import { getProjectTypes } from "../../enums/project.types";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";

import styles from "./SideBar.module.css";

function SideBar() {
    const animalTypes = getAnimalTypes();
    const contactTypes = getContactTypes();
    const organizationTypes = getOrganizationTypes();
    const projectTypes = getProjectTypes();

    const [treeState, setTreeState] = useState(["animals", "contacts", "organizations", "projects"]);

    const treeNavigation = [
        {
            id: "home",
            label: "Home",
        },
        {
            id: "animals",
            label: "Animals",
            children: getAnimalTypes().map((animalType) => ({
                id: String(animalType.key),
                label: animalType.plural,
                children: getAnimalCategories({ type: animalType.key }).map((animalCategory) => ({
                    id: `${animalType.key}_${String(animalCategory.key)}`,
                    label: animalCategory.plural,
                    children: getAnimalBreeds({ category: animalCategory.key }).map((animalBreed) => ({
                        id: `${animalCategory.key}_${String(animalBreed.key)}`,
                        label: animalBreed.plural,
                    })),
                })),
            })),
        },
        {
            id: "contacts",
            label: "Contacts",
            children: contactTypes.map((contactType) => ({
                id: String(contactType.key),
                label: contactType.plural,
            })),
        },
        {
            id: "organizations",
            label: "Organizations",
            children: organizationTypes.map((organizationType) => ({
                id: String(organizationType.key),
                label: organizationType.plural,
            })),
        },
        {
            id: "projects",
            label: "Projects",
            children: projectTypes.map((projectType) => ({
                id: String(projectType.key),
                label: projectType.plural,
            })),
        },
    ];

    return (
        <div className={styles.container}>
            <RichTreeView
                items={treeNavigation}
                expandedItems={treeState}
                onExpandedItemsChange={(event, newTree) => setTreeState(newTree)}
            />
        </div>
    );
}

export default SideBar;
