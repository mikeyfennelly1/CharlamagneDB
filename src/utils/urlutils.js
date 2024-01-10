const PRODUCTION_URL_PREFIX = '/CharlamagneDB';
const hasProductionUrlPrefix = window.location.pathname.toLowerCase().startsWith(PRODUCTION_URL_PREFIX.toLowerCase())

/**
 * Simple utility function used to construct routing URLs such that they 
 * will be properly prefixed depending on the environment it's running in e.g.
 * in the production (GitHub pages) environment the URLs need to be prefixed with
 * "/CharlamagneDB" while in the local dev serve environment they don't have a prefix
 * @param {*} url 
 * @returns The normalised URL.
 */
export const constructUrl = (url) => {
    if (hasProductionUrlPrefix) {
        return `${PRODUCTION_URL_PREFIX}${url}`;
    }
    return url;
}