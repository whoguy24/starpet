// Data Structure - Animals

const animals = {
    animal_ID: String,
    contact_ID: String,
    date_created: Date,
    date_updated: Date,
    type: Enum,
    category: Enum,
    breed: Enum,
    breed_optional: String,
    color: Enum,
    size: Enum,
    birth_year: Int,
    height: Int,
    weight: Int,
    length: Int,
    girth: Int,
    neck: Enum,
    notes: String,
    flag: Enum,
    active: Booleon,
    skills: {
        sit_stay: Boolean,
        down_stay: Boolean,
        stand_stay: Boolean,
        command_bark: Boolean,
        command_hold_object: Boolean,
        command_silent: Boolean,
        tolerance_handle: Boolean,
        tolerance_sound: Boolean,
        tolerance_dogs: Boolean,
        tolerance_small_animals: Boolean,
        tolerance_strangers: Boolean,
        tolerance_children: Boolean,
        work_at_distance: Boolean,
    },
};

const animals_type = [
    "Dog",
    "Cat",
    "Horse",
    "Livestock",
    "Small Animal",
    "Other",
];

const animals_category = [
    ["",""],
    [],
];