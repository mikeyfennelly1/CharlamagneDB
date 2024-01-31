const PRODUCTION_URL_PREFIX = '/CharlamagneDB';
export const hasProductionUrlPrefix = window.location.pathname.toLowerCase().startsWith(PRODUCTION_URL_PREFIX.toLowerCase())


export const constructUrl = (url) => {
    if (hasProductionUrlPrefix) {
        return `${PRODUCTION_URL_PREFIX}${url}`;
    }
    return url;
}

export const constructImgURL = (url) => {
    const URLwithoutFirstTwo = url.substring(2)
    if (hasProductionUrlPrefix) {
        return `${PRODUCTION_URL_PREFIX}${URLwithoutFirstTwo}`;
    }
}