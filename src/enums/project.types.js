export function getProjectTypes() {
    return projectTypes;
}

export function getProjectType(key) {
    return projectTypes.find((type) => type.key === key);
}

const projectTypes = [
    { key: "ac", label: "AC", plural: "AC" },
    { key: "bobp", label: "BOBP", plural: "BOBP" },
    { key: "tet", label: "TET", plural: "TET" },
];
