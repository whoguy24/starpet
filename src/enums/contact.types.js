export function getContactTypes({ key } = {}) {
    const matchingTypes = contactTypes.filter((type) => !key || type.key === key);
    return key ? matchingTypes[0] : matchingTypes;
}

const contactTypes = [
    { key: "owner", label: "Owner", plural: "Owners" },
    { key: "crew", label: "Crew", plural: "Crew" },
];
