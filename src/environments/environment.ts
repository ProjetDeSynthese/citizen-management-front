export const environment = {};

export const baseURL = 'http://localhost:8080';

export const apiURL = `${baseURL}/api/v1/`;

export const routesApi = {
    REGION: {
        FIND_ALL: apiURL + "region/",
        SAVE: apiURL + "region/",
        REMOVE: apiURL + "region/",
        FIND_BY_ID: apiURL + "region/",
        UPDATE: apiURL + "region/"
    },
    DEPARTEMENT: {
        FIND_ALL: apiURL + "departement/",
        SAVE: apiURL + "departement/",
        REMOVE: apiURL + "departement/",
        FIND_BY_ID: apiURL + "departement/",
        UPDATE: apiURL + "departement/"
    },
    COMMUNE: {
        FIND_ALL: apiURL + "commune/",
        SAVE: apiURL + "commune/",
        REMOVE: apiURL + "commune/",
        FIND_BY_ID: apiURL + "commune/",
        UPDATE: apiURL + "commune/"
    },
    VILLE: {
        FIND_ALL: apiURL + "ville/",
        SAVE: apiURL + "ville/",
        REMOVE: apiURL + "ville/",
        FIND_BY_ID: apiURL + "ville/",
        UPDATE: apiURL + "ville/"
    },
    CITOYEN: {
        FIND_ALL: apiURL + "citoyen/",
        SAVE: apiURL + "citoyen/",
        REMOVE: apiURL + "citoyen/",
        FIND_BY_ID: apiURL + "citoyen/",
        UPDATE: apiURL + "citoyen/"
    },
    HABITAT: {
        FIND_ALL: apiURL + "habitat/",
        SAVE: apiURL + "habitat/",
        REMOVE: apiURL + "habitat/",
        FIND_BY_ID: apiURL + "habitat/",
        UPDATE: apiURL + "habitat/"
    },
    QUARTIER: {
        FIND_ALL: apiURL + "quartier/",
        SAVE: apiURL + "quartier/",
        REMOVE: apiURL + "quartier/",
        FIND_BY_ID: apiURL + "quartier/",
        UPDATE: apiURL + "quartier/"
    },
    SECTEUR: {
        FIND_ALL: apiURL + "secteur/",
        SAVE: apiURL + "secteur/",
        REMOVE: apiURL + "secteur/",
        FIND_BY_ID: apiURL + "secteur/",
        UPDATE: apiURL + "secteur/"
    },

}
