export function getView() {
    return sessionStorage.getItem("view");
}

export function saveView(view) {
    sessionStorage.setItem("view", view);
    return sessionStorage.getItem("view");
}
