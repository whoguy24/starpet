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

import styles from "./SideBar.module.css";

function SideBar() {
    const [treeState, setTreeState] = useState(["animals", "contacts", "organizations", "projects"]);

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <SimpleTreeView defaultExpandedItems={["animals", "contacts", "organizations", "projects"]}>
                <TreeItem
                    itemId="home"
                    label="Home"
                    onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/home`);
                    }}
                />
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
                <TreeItem
                    itemId="contacts"
                    label="Contacts"
                    onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/home/contacts`);
                    }}
                >
                    {getContactTypes().map((contactType) => (
                        <TreeItem
                            key={contactType.key}
                            itemId={contactType.key}
                            label={contactType.plural}
                            onClick={(event) => {
                                event.stopPropagation();
                                navigate(`/home/contacts/${getRoute(contactType.key)}`);
                            }}
                        />
                    ))}
                </TreeItem>
                <TreeItem
                    itemId="organizations"
                    label="Organizations"
                    onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/home/organizations`);
                    }}
                >
                    {getOrganizationTypes().map((organizationType) => (
                        <TreeItem
                            key={organizationType.key}
                            itemId={organizationType.key}
                            label={organizationType.plural}
                            onClick={(event) => {
                                event.stopPropagation();
                                navigate(`/home/organizations/${getRoute(organizationType.key)}`);
                            }}
                        />
                    ))}
                </TreeItem>
                <TreeItem
                    itemId="projects"
                    label="Projects"
                    onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/home/projects`);
                    }}
                >
                    {getProjectTypes().map((projectType) => (
                        <TreeItem
                            key={projectType.key}
                            itemId={projectType.key}
                            label={projectType.plural}
                            onClick={(event) => {
                                event.stopPropagation();
                                navigate(`/home/projects/${getRoute(projectType.key)}`);
                            }}
                        />
                    ))}
                </TreeItem>
            </SimpleTreeView>
        </div>
    );
}

export default SideBar;
