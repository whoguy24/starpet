import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";
import { getAnimalBreeds } from "../../enums/animal.breeds";
import { getContactTypes } from "../../enums/contact.types";
import { getOrganizationTypes } from "../../enums/organization.types";
import { getProjectTypes } from "../../enums/project.types";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

import { getRoute } from "../../utils/slugify";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

import styles from "./SideBar.module.css";

function SideBar() {
    const [treeState, setTreeState] = useState(["animals", "contacts", "organizations", "projects"]);

    const navigate = useNavigate();

    // function handleSelection(event, item) {
    //     console.log(item.key);
    // }

    // const treeNavigation = [
    //     {
    //         id: "home",
    //         label: "Home",
    //         url: "/home",
    //     },
    //     {
    //         id: "animals",
    //         label: "Animals",
    //         children: getAnimalTypes().map((animalType) => ({
    //             id: String(animalType.key),
    //             label: animalType.plural,
    //             url: "/home",
    //             children: getAnimalCategories({ type: animalType.key }).map((animalCategory) => ({
    //                 id: `${animalType.key}_${String(animalCategory.key)}`,
    //                 label: animalCategory.plural,
    //                 children: getAnimalBreeds({ category: animalCategory.key }).map((animalBreed) => ({
    //                     id: `${animalCategory.key}_${String(animalBreed.key)}`,
    //                     label: animalBreed.plural,
    //                 })),
    //             })),
    //         })),
    //     },
    //     {
    //         id: "contacts",
    //         label: "Contacts",
    //         children: contactTypes.map((contactType) => ({
    //             id: String(contactType.key),
    //             label: contactType.plural,
    //         })),
    //     },
    //     {
    //         id: "organizations",
    //         label: "Organizations",
    //         children: organizationTypes.map((organizationType) => ({
    //             id: String(organizationType.key),
    //             label: organizationType.plural,
    //         })),
    //     },
    //     {
    //         id: "projects",
    //         label: "Projects",
    //         children: projectTypes.map((projectType) => ({
    //             id: String(projectType.key),
    //             label: projectType.plural,
    //         })),
    //     },
    // ];

    // onClick={() => handleItemClick(`/home/animals/${animalType.key}`)}

    return (
        <div className={styles.container}>
            <SimpleTreeView defaultExpandedItems={["animals"]}>
                <TreeItem
                    itemId="animals"
                    label="Animals"
                    onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/home/animals`);
                    }}
                >
                    {getAnimalTypes().map((animalType) => (
                        <TreeItem
                            key={animalType.key}
                            itemId={animalType.key}
                            label={animalType.plural}
                            onClick={(event) => {
                                event.stopPropagation();
                                navigate(`/home/animals/${getRoute(animalType.key)}`);
                            }}
                        >
                            {getAnimalCategories({ type: animalType.key }).map((animalCategory) => (
                                <TreeItem
                                    key={animalCategory.key}
                                    itemId={animalCategory.key}
                                    label={animalCategory.plural}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        navigate(
                                            `/home/animals/${getRoute(animalCategory.type)}/${getRoute(
                                                animalCategory.key,
                                            )}`,
                                        );
                                    }}
                                >
                                    {getAnimalBreeds({ category: animalCategory.key }).map((animalBreed) => (
                                        <TreeItem
                                            key={animalBreed.key}
                                            itemId={animalBreed.key}
                                            label={animalBreed.plural}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                navigate(
                                                    `/home/animals/${getRoute(animalBreed.type)}/${getRoute(
                                                        animalBreed.category,
                                                    )}/${getRoute(animalBreed.key)}`,
                                                );
                                            }}
                                        />
                                    ))}
                                </TreeItem>
                            ))}
                        </TreeItem>
                    ))}
                </TreeItem>
                <TreeItem itemId="contacts" label="Contacts"></TreeItem>
                <TreeItem itemId="organizations" label="Organizations"></TreeItem>
                <TreeItem itemId="projects" label="Projects"></TreeItem>
            </SimpleTreeView>
            {/* <RichTreeView
                items={treeNavigation}
                expandedItems={treeState}
                onExpandedItemsChange={(event, newTree) => setTreeState(newTree)}
                onItemSelectionToggle={(event, item) => {
                    console.log(item);
                }}
            /> */}
        </div>
    );
}

export default SideBar;
