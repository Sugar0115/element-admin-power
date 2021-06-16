import Cookie from 'js-cookie'
export function getCookie(el) {
    return Cookie.get(el);
}
export function setCookie(el, data, date) {
    return Cookie.set(el, data, { expires: date })
}
export function removeCookie(el) {
    return Cookie.removeCookie(el)
}