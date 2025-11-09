// Data Structure - Animals

export const animals = {
  animal_ID: String,
  contact_ID: String,
  date_created: Date,
  date_updated: Date,
  name: String,
  type: String,
  category: String,
  breed: String,
  breed_optional: String,
  color: String,
  size: String,
  birth_year: Int,
  height: Int,
  weight: Int,
  length: Int,
  girth: Int,
  neck: String,
  notes: String,
  flag: String,
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

export const animals_type = [
  "Dog",
  "Cat",
  "Horse",
  "Livestock",
  "Small Animal",
  "Other",
];

export const animals_category = [
  { type: "Dog", category: "Working Dog" },
  { type: "Dog", category: "Hunting Dog" },
  { type: "Dog", category: "Small Dog" },
  { type: "Dog", category: "Purse Dog" },
];
