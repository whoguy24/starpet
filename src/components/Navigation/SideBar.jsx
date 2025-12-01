import styles from "./SideBar.module.css";

import SideBarCategory from "./SideBarCategory";

import { getAnimalTypes } from "../../enums/animal.types";
import { getContactTypes } from "../../enums/contact.types";
import { getOrganizationTypes } from "../../enums/organization.types";
import { getProjectTypes } from "../../enums/project.types";

function SideBar() {
    const animals = getAnimalTypes();
    const contacts = getContactTypes();
    const organizations = getOrganizationTypes();
    const projects = getProjectTypes();

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
