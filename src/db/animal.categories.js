export function getAnimalCategories({ type, id } = {}) {
    const matchingCategories = animalCategories.filter(
        (category) => (!type || category.type === type) && (!id || category.id === id),
    );
    return id ? matchingCategories[0] : matchingCategories;
}

const animalCategories = [
    { id: "sporting", type: "dog", label: "Sporting", plural: "Sporting" },
    { id: "hound", type: "dog", label: "Hound", plural: "Hounds" },
    { id: "working_dog", type: "dog", label: "Working", plural: "Working" },
    { id: "terrier", type: "dog", label: "Terrier", plural: "Terriers" },
    { id: "toy", type: "dog", label: "Toy", plural: "Toys" },
    { id: "non_sporting", type: "dog", label: "Non-Sporting", plural: "Non-Sporting" },
    { id: "herding", type: "dog", label: "Herding", plural: "Herding" },
    { id: "other_dog", type: "dog", label: "Other", plural: "Other" },
    { id: "short_hair", type: "cat", label: "Short Hair", plural: "Short Hair" },
    { id: "long_hair", type: "cat", label: "Long Hair", plural: "Long Hair" },
    { id: "purebred", type: "cat", label: "Purebred", plural: "Purebred" },
    { id: "other_cat", type: "cat", label: "Other", plural: "Other" },
    { id: "riding", type: "horse", label: "Riding", plural: "Riding" },
    { id: "working_horse", type: "horse", label: "Working", plural: "Working" },
    { id: "pony", type: "horse", label: "Pony", plural: "Ponies", route: "pony" },
    { id: "miniature", type: "horse", label: "Miniature", plural: "Miniature" },
    { id: "other_horse", type: "horse", label: "Other", plural: "Other" },
    { id: "cattle", type: "livestock", label: "Cattle", plural: "Cattle" },
    { id: "sheep", type: "livestock", label: "Sheep", plural: "Sheep" },
    { id: "pig", type: "livestock", label: "Pig", plural: "Pigs" },
    { id: "goat", type: "livestock", label: "Goat", plural: "Goats" },
    { id: "llama_alpaca", type: "livestock", label: "Llama/Alpaca", plural: "Llamas/Alpacas" },
    { id: "poultry", type: "livestock", label: "Poultry", plural: "Poultry" },
    { id: "other_livestock", type: "livestock", label: "Other", plural: "Other" },
    { id: "bird", type: "small_pet", label: "Bird", plural: "Birds" },
    { id: "hamster", type: "small_pet", label: "Hamster", plural: "Hamsters" },
    { id: "bunny", type: "small_pet", label: "Bunny", plural: "Bunnies" },
    { id: "guinea_pig", type: "small_pet", label: "Guinea Pig", plural: "Guinea Pigs" },
    { id: "mouse", type: "small_pet", label: "Mouse", plural: "Mice" },
    { id: "rat", type: "small_pet", label: "Rat", plural: "Rats" },
    { id: "wildlife", type: "other", label: "Wildlife", plural: "Wildlife" },
    { id: "exotic", type: "other", label: "Exotic", plural: "Exotic" },
];
