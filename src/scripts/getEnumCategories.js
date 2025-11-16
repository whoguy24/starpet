import { categories } from "../enums/animals/categories";

export function getEnumCategories(property, value, type) {
    if (property && value) {
        const results = types.filter((type) => type[property] === value) || [];
        return results.length === 1 ? results[0] : results;
    } else if (!property || !value) {
        const results = types;
        return results;
    } else {
        return null;
    }
}
