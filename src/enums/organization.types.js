export function getOrganizationTypes({ key } = {}) {
    const matchingTypes = organizationTypes.filter((type) => !key || type.key === key);
    return key ? matchingTypes[0] : matchingTypes;
}

const organizationTypes = [
    { key: "rescue", label: "Rescue", plural: "Rescues" },
    { key: "client", label: "Client", plural: "Clients" },
    { key: "service", label: "Service", plural: "Services" },
];
