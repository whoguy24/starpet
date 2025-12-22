export function getPages({ key } = {}) {
    const matchingTypes = pages.filter((type) => !key || type.key === key);
    return key ? matchingTypes[0] : matchingTypes;
}

const pages = [
    { key: "animal", label: "Animal", plural: "Animals" },
    { key: "contact", label: "Contact", plural: "Contacts" },
    { key: "project", label: "Project", plural: "Projects" },
    { key: "organization", label: "Organization", plural: "Organizations" },
];
