import { types } from "../enums/animals/types";
import { categories } from "../enums/animals/categories";
import { breeds } from "../enums/animals/breeds";

const enums = {
    types,
    categories,
    breeds,
};

export function getEnum(table, property, value) {
    if (table && property && value) {
        const results = enums[table]?.filter((object) => object[property] === value) || [];
        return results.length === 1 ? results[0] : results;
    } else if ((table && !property) || !value) {
        const results = enums[table];
        return results;
    } else {
        return [];
    }
}
