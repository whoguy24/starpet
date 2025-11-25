// Fetch Category by Type if Type is Provided
// Otherwise, Fetch All Categories
export function getAnimalCategories(type) {
    if (type) {
        return animalCategories.filter((category) => category.type === type);
    } else {
        return animalCategories;
    }
}

// Fetch Specific Enum
export function getAnimalCategory(key, type) {
    return animalCategories.find((category) => category.key === key && category.type === type);
}

// Define Enum
const animalCategories = [
    { key: "sporting", type: "dog", label: "Sporting", plural: "Sporting" },
    { key: "hound", type: "dog", label: "Hound", plural: "Hounds" },
    { key: "working_dog", type: "dog", label: "Working", plural: "Working" },
    { key: "terrier", type: "dog", label: "Terrier", plural: "Terriers" },
    { key: "toy", type: "dog", label: "Toy", plural: "Toys" },
    { key: "non_sporting", type: "dog", label: "Non-Sporting", plural: "Non-Sporting" },
    { key: "herding", type: "dog", label: "Herding", plural: "Herding" },
    { key: "other_dog", type: "dog", label: "Other", plural: "Other" },
    { key: "short_hair", type: "cat", label: "Short Hair", plural: "Short Hair" },
    { key: "long_hair", type: "cat", label: "Long Hair", plural: "Long Hair" },
    { key: "purebred", type: "cat", label: "Purebred", plural: "Purebred" },
    { key: "other_cat", type: "cat", label: "Other", plural: "Other" },
    { key: "riding", type: "horse", label: "Riding", plural: "Riding" },
    { key: "working_horse", type: "horse", label: "Working", plural: "Working" },
    { key: "pony", type: "horse", label: "Pony", plural: "Ponies", route: "pony" },
    { key: "miniature", type: "horse", label: "Miniature", plural: "Miniature" },
    { key: "other_horse", type: "horse", label: "Other", plural: "Other" },
    { key: "cattle", type: "livestock", label: "Cattle", plural: "Cattle" },
    { key: "sheep", type: "livestock", label: "Sheep", plural: "Sheep" },
    { key: "pig", type: "livestock", label: "Pig", plural: "Pigs" },
    { key: "goat", type: "livestock", label: "Goat", plural: "Goats" },
    { key: "llama_alpaca", type: "livestock", label: "Llama/Alpaca", plural: "Llamas/Alpacas" },
    { key: "poultry", type: "livestock", label: "Poultry", plural: "Poultry" },
    { key: "other_livestock", type: "livestock", label: "Other", plural: "Other" },
    { key: "bird", type: "small_pet", label: "Bird", plural: "Birds" },
    { key: "hamster", type: "small_pet", label: "Hamster", plural: "Hamsters" },
    { key: "bunny", type: "small_pet", label: "Bunny", plural: "Bunnies" },
    { key: "guinea_pig", type: "small_pet", label: "Guinea Pig", plural: "Guinea Pigs" },
    { key: "mouse", type: "small_pet", label: "Mouse", plural: "Mice" },
    { key: "rat", type: "small_pet", label: "Rat", plural: "Rats" },
    { key: "wildlife", type: "other", label: "Wildlife", plural: "Wildlife" },
    { key: "exotic", type: "other", label: "Exotic", plural: "Exotic" },
    { key: "other", type: "other", label: "Other", plural: "Other" },
];
