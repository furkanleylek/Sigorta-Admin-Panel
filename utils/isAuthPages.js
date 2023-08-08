const AUTH_PAGES = ['/login']

const isAuthPages = (url) => {
    return AUTH_PAGES.includes(url);
}

export default isAuthPages