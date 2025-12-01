export function getOrganizationTypes() {
    return organizationTypes;
}

export function getOrganizationType(key) {
    return organizationTypes.find((type) => type.key === key);
}

const organizationTypes = [
    { key: "rescue", label: "Rescue", plural: "Rescues" },
    { key: "client", label: "Client", plural: "Clients" },
    { key: "service", label: "Service", plural: "Services" },
];
