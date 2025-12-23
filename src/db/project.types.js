export function getProjectTypes({ key } = {}) {
    const matchingTypes = projectTypes.filter((type) => !key || type.key === key);
    return key ? matchingTypes[0] : matchingTypes;
}

const projectTypes = [
    { key: "ac", label: "AC", plural: "AC" },
    { key: "bobp", label: "BOBP", plural: "BOBP" },
    { key: "tet", label: "TET", plural: "TET" },
];
