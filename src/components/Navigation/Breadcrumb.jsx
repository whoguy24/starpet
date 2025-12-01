// Import Modules
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAnimalTypes } from "../../enums/animal.types";
import { getAnimalCategories } from "../../enums/animal.categories";
import { getAnimalBreeds } from "../../enums/animal.breeds";
import { getKey } from "../../utils/slugify";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styles from "./Breadcrumb.module.css";

function Breadcrumb() {
    const { pathname } = useLocation();

    const animals = useSelector((state) => state.animals);

    const routeArray = pathname.split("/").filter(Boolean);
    const keyArray = routeArray.map((route) => getKey(route));

    let absolutePath = "";

    const breadcrumbs = keyArray.map((breadcrumb, index) => {
        let label = "";

        if (index === 0 || index === 1) {
            absolutePath += "/" + breadcrumb;
            label = breadcrumb.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        } else {
            if (keyArray[1] === "animals") {
                if (index === 2) {
                    const animalType = getAnimalTypes({ key: breadcrumb });
                    absolutePath += "/" + animalType.key;
                    label = animalType.plural;
                } else if (index === 3) {
                    const animalCategory = getAnimalCategories({ key: breadcrumb });
                    absolutePath += "/" + animalCategory.key;
                    label = animalCategory.plural;
                } else if (index === 4) {
                    const animalBreed = getAnimalBreeds({ key: breadcrumb });
                    absolutePath += "/" + animalBreed.key;
                    label = animalBreed.plural;
                } else if (index === 5) {
                    const animal = animals.find((animal) => animal.id === breadcrumb);
                    absolutePath += "/" + breadcrumb;
                    label = animal?.name;
                }
            } else if (keyArray[1] === "contacts") {
                // TODO
            }
        }

        return { label, path: absolutePath };
    });

    return (
        <>
            {pathname != "/home" && (
                <Breadcrumbs className={styles.container} separator="›" aria-label="breadcrumb">
                    {breadcrumbs.map((breadcrumb, index) => (
                        <Link className={styles.link} key={index} to={breadcrumb.path}>
                            {breadcrumb.label}
                        </Link>
                    ))}
                </Breadcrumbs>
            )}
        </>
    );
}

export default Breadcrumb;
