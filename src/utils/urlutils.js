const PRODUCTION_URL_PREFIX = '/CharlamagneDB';
export const hasProductionUrlPrefix = window.location.pathname.toLowerCase().startsWith(PRODUCTION_URL_PREFIX.toLowerCase())


export const constructUrl = (url) => {
    const hasOneDotPrefix = url.startsWith(".")
    const hasTwoDotPrefix = url.startsWith("..")
    if (hasProductionUrlPrefix) {
        if (hasTwoDotPrefix) {
            return `${PRODUCTION_URL_PREFIX}${url.substring(2)}`;
        }
        if (hasOneDotPrefix) {
            return `${PRODUCTION_URL_PREFIX}${url.substring(1)}`;
        } else {
            return `${PRODUCTION_URL_PREFIX}${url}`;
        }
    }
    return url;
}


console.log(constructUrl('../image'))