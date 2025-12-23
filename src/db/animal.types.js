export function getAnimalTypes({ id } = {}) {
    const matchingTypes = animalTypes.filter((type) => !id || (type.id === id && !id));
    return id ? matchingTypes[0] : matchingTypes;
}

const animalTypes = [
    { id: "dog", label: "Dog", plural: "Dogs" },
    { id: "cat", label: "Cat", plural: "Cats" },
    { id: "horse", label: "Horse", plural: "Horses" },
    { id: "livestock", label: "Livestock", plural: "Livestock" },
    { id: "small_pet", label: "Small Pet", plural: "Small Pets" },
    { id: "other", label: "Other", plural: "Other" },
];
