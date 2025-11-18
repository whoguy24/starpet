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
    { key: "working", type: "dog", label: "Working", plural: "Working" },
    { key: "terrier", type: "dog", label: "Terrier", plural: "Terriers" },
    { key: "toy", type: "dog", label: "Toy", plural: "Toys" },
    { key: "non_sporting", type: "dog", label: "Non-Sporting", plural: "Non-Sporting" },
    { key: "herding", type: "dog", label: "Herding", plural: "Herding" },
    { key: "short_hair", type: "cat", label: "Short Hair", plural: "Short Hair" },
    { key: "medium_hair", type: "cat", label: "Medium Hair", plural: "Medium Hair" },
    { key: "long_hair", type: "cat", label: "Long Hair", plural: "Long Hair" },
    { key: "hairless", type: "cat", label: "Hairless", plural: "Hairless" },
    { key: "riding", type: "horse", label: "Riding", plural: "Riding" },
    { key: "working", type: "horse", label: "Working", plural: "Working" },
    { key: "pony", type: "horse", label: "Pony", plural: "Ponies", route: "pony" },
    { key: "miniature", type: "horse", label: "Miniature", plural: "Miniature" },
    { key: "cattle", type: "livestock", label: "Cattle", plural: "Cattle" },
    { key: "sheep", type: "livestock", label: "Sheep", plural: "Sheep" },
    { key: "pig", type: "livestock", label: "Pig", plural: "Pigs" },
    { key: "goat", type: "livestock", label: "Goat", plural: "Goats" },
    { key: "llama_alpaca", type: "livestock", label: "Llama/Alpaca", plural: "Llamas/Alpacas" },
    { key: "poultry", type: "livestock", label: "Poultry", plural: "Poultry" },
    { key: "bird", type: "small_pet", label: "Bird", plural: "Birds" },
    { key: "hamster", type: "small_pet", label: "Hamster", plural: "Hamsters" },
    { key: "bunny", type: "small_pet", label: "Bunny", plural: "Bunnies" },
    { key: "guinea_pig", type: "small_pet", label: "Guinea Pig", plural: "Guinea Pigs" },
    { key: "mouse", type: "small_pet", label: "Mouse", plural: "Mice" },
    { key: "rat", type: "small_pet", label: "Rat", plural: "Rats" },
    { key: "ferret", type: "small_pet", label: "Ferret", plural: "Ferrets" },
    { key: "wildlife", type: "other", label: "Wildlife", plural: "Wildlife" },
    { key: "exotic", type: "other", label: "Exotic", plural: "Exotic" },
    { key: "other", type: "other", label: "Other", plural: "Other" },
];
