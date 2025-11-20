// Import Modules
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAnimalType } from "../../enums/animal.types";
import { getAnimalCategory } from "../../enums/animal.categories";
import { getAnimalBreed } from "../../enums/animal.breeds";
import { getRoute, getKey } from "../../utils/slugify";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styles from "./Breadcrumb.module.css";

// Component Function
function Breadcrumb() {
    // Define Hooks
    const { pathname } = useLocation();

    // Define Redux State
    const animals = useSelector((state) => state.animals);
    const contacts = useSelector((state) => state.contacts);

    // Initialize Path Array
    const linkArray = pathname.split("/").filter(Boolean);
    let absolutePath = "";

    // Transform Each Object in Path Array
    const breadcrumbs = linkArray.map((route, index) => {
        let label = "";

        // Interrogate Lookup Tables for Matching Keys
        const animalType = getAnimalType(getKey(route));
        const animalCategory = getAnimalCategory(getKey(route), getKey(linkArray[2]));
        const animalBreed = getAnimalBreed(getKey(route), getKey(linkArray[2]), getKey(linkArray[3]));

        // If Lookup Match Found, Fetch Label
        // If Firestore ID Found, Fetch Matching Record From Redux
        // Otherwise, Just Transform Route into Label
        // Finally, Append Path to Absolute Path
        if (animalType) {
            absolutePath += "/" + getRoute(animalType.key);
            label = animalType.plural;
        } else if (animalCategory) {
            absolutePath += "/" + getRoute(animalCategory.key);
            label = animalCategory.plural;
        } else if (animalBreed) {
            absolutePath += "/" + getRoute(animalBreed.key);
            label = animalBreed.plural;
        } else if (/^[A-Za-z0-9]{20,}$/.test(route)) {
            if (linkArray[1] === "animals") {
                let animal = animals.find((animal) => animal.id === route);
                absolutePath += "/" + route;
                label = animal?.name;
            } else if (linkArray[1] === "contacts") {
                let contact = contacts.find((contact) => contact.id === route);
                absolutePath += "/" + route;
                label = `${contact?.first_name} ${contact?.last_name}`;
            }
        } else {
            absolutePath += "/" + route;
            label = route.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        }

        // Return Breadcrumb Object
        return { label, path: absolutePath };
    });

    // Render DOM
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

// Export Component Function
export default Breadcrumb;
