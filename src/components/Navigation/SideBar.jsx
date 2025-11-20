import styles from "./SideBar.module.css";

import SideBarCategory from "./SideBarCategory";

import { getAnimalTypes } from "../../enums/animal.types";

function SideBar() {
    const animals = getAnimalTypes();

    const contacts = [
        { key: "owner", label: "Owner", plural: "Owners" },
        { key: "crew", label: "Crew", plural: "Crew" },
    ];

    const organizations = [
        { key: "shelter", label: "Shelter", plural: "Shelters" },
        { key: "client", label: "Client", plural: "Clients" },
        { key: "service", label: "Service", plural: "Services" },
    ];

    const projects = [
        { key: "active", label: "Active", plural: "Active" },
        { key: "archived", label: "Archived", plural: "Archived" },
    ];

    return (
        <div className={styles.container}>
            <SideBarCategory title="ANIMALS" route="/home/animals" menu={animals} />
            <SideBarCategory title="CONTACTS" route="/home/contacts" menu={contacts} />
            <SideBarCategory title="ORGANIZATIONS" route="/home/organizations" menu={organizations} />
            <SideBarCategory title="PROJECTS" route="/home/projects" menu={projects} />
        </div>
    );
}

export default SideBar;
