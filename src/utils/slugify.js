// Return Slug From Key
export function getRoute(key) {
    return key?.replace(/_/g, "-");
}

// Return Key From Slug
export function getKey(route) {
    return route?.replace(/-/g, "_");
}
