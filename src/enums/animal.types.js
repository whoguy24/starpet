export function getAnimalTypes({ key, page } = {}) {
    const matchingTypes = animalTypes.filter((type) => !key || (type.key === key && !key) || type.page === page);
    return key ? matchingTypes[0] : matchingTypes;
}

const animalTypes = [
    { key: "dog", label: "Dog", plural: "Dogs" },
    { key: "cat", label: "Cat", plural: "Cats" },
    { key: "horse", label: "Horse", plural: "Horses" },
    { key: "livestock", label: "Livestock", plural: "Livestock" },
    { key: "small_pet", label: "Small Pet", plural: "Small Pets" },
    { key: "type_other", label: "Other", plural: "Other" },
];
