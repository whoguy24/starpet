export function getAnimalTypes({ id } = {}) {
    const matchingTypes = animalTypes.filter((type) => !id || (type.id === id && !id));
    return id ? matchingTypes[0] : matchingTypes;
}

const animalTypes = [
    { id: "dog", label: "Dog", plural: "Dogs", url: "/animals/dogs" },
    { id: "cat", label: "Cat", plural: "Cats", url: "/animals/cats" },
    { id: "horse", label: "Horse", plural: "Horses", url: "/animals/horses" },
    { id: "livestock", label: "Livestock", plural: "Livestock", url: "/animals/livestock" },
    { id: "small_pet", label: "Small Pet", plural: "Small Pets", url: "/animals/small-pets" },
    { id: "other", label: "Other", plural: "Other", url: "/animals/other" },
];
