export function getContactTypes() {
    return contactTypes;
}

export function getContactType(key) {
    return contactTypes.find((type) => type.key === key);
}

const contactTypes = [
    { key: "owner", label: "Owner", plural: "Owners" },
    { key: "crew", label: "Crew", plural: "Crew" },
];
