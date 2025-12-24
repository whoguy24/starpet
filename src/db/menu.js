import { getContactTypes } from "./contact.types";
import { getAnimalTypes } from "./animal.types";
import { getAnimalCategories } from "./animal.categories";

export function getMenuItem({ id, url, menuItems = menu }) {
    for (const menuItem of menuItems) {
        if ((id && menuItem.id === id) || (url && menuItem.url === url.replace(/\/$/, ""))) {
            return menuItem;
        } else if (menuItem.children) {
            const found = getMenuItem({ id, url, menuItems: menuItem.children });
            if (found) return found;
        }
    }
    return null;
}

export const menu = [
    {
        id: "home",
        label: "Home",
        plural: "Home",
        url: "/home",
        children: [],
    },
    {
        id: "animals",
        label: "Animal",
        plural: "Animals",
        url: "/animals",
        children: getAnimalTypes().map((animalType) => ({
            ...animalType,
            url: animalType.url,
            children: getAnimalCategories({ type: animalType.id }).map((animalCategory) => ({
                ...animalCategory,
                url: animalCategory.url,
            })),
        })),
    },
    {
        id: "contacts",
        label: "Contact",
        plural: "Contacts",
        url: "/contacts",
        children: [],
    },
    {
        id: "projects",
        label: "Project",
        plural: "Projects",
        url: "/projects",
        children: [],
    },
];
