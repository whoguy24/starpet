// Fetch All Enums
export function getAnimalTypes() {
    return animalTypes;
}

// Fetch Specific Enum
export function getAnimalType(key) {
    return animalTypes.find((type) => type.key === key);
}

// Define Enum
const animalTypes = [
    { key: "dog", label: "Dog", plural: "Dogs" },
    { key: "cat", label: "Cat", plural: "Cats" },
    { key: "horse", label: "Horse", plural: "Horses" },
    { key: "livestock", label: "Livestock", plural: "Livestock" },
    { key: "small_pet", label: "Small Pet", plural: "Small Pets" },
    { key: "other", label: "Other", plural: "Other" },
];
