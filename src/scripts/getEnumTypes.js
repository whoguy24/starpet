import { types } from "../enums/animals/types";

export function getEnumTypes(property, value) {
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
