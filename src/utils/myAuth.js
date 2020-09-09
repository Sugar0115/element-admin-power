export function getToken(el) {
    var item = JSON.parse(sessionStorage.getItem(el));
    if (item == null || item == undefined) {
        return null
    } else {
        return item;
    }
}
export function setToken(el, data) {
    sessionStorage.setItem(el, JSON.stringify(data));
}
export function clearToken(el) {
    sessionStorage.clear();
}