export function getContactTypes({ id } = {}) {
    const matchingTypes = contactTypes.filter((type) => !id || type.id === id);
    return id ? matchingTypes[0] : matchingTypes;
}

const contactTypes = [
    { id: "owner", label: "Owner", plural: "Owners" },
    { id: "professional", label: "Professional", plural: "Professional" },
    { id: "crew", label: "Crew", plural: "Crew" },
];
