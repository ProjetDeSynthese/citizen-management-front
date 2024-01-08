 export const baseURL = 'http://localhost:8080';
//export const baseURL = 'http://192.168.116.4:8080';



export const apiURL = `${baseURL}/api/`;

export const routesApi = {
     REGION: {
          FIND_ALL: apiURL + 'region/',
          SAVE: apiURL + 'region/',
          REMOVE: apiURL + 'region/',
          FIND_BY_ID: apiURL + 'region/',
          UPDATE: apiURL + 'region/',
          FIND_DEPARTEMENT: apiURL + 'departement/findByRegion/',

     },
     DEPARTEMENT: {
          FIND_ALL: apiURL + 'departement/',
          SAVE: apiURL + 'departement/',
          REMOVE: apiURL + 'departement/',
          FIND_BY_ID: apiURL + 'departement/',
          UPDATE: apiURL + 'departement/',
          FIND_VILLE: apiURL + 'ville/findByDepartement/',


     },
     COMMUNE: {
          FIND_ALL: apiURL + 'commune/',
          SAVE: apiURL + 'commune/',
          REMOVE: apiURL + 'commune/',
          FIND_BY_ID: apiURL + 'commune/',
          UPDATE: apiURL + 'commune/',
          FIND_QUARTIER: apiURL + 'quartier/findByCommune/',

     },
     VILLE: {
          FIND_ALL: apiURL + 'ville/',
          SAVE: apiURL + 'ville/',
          REMOVE: apiURL + 'ville/',
          FIND_BY_ID: apiURL + 'ville/',
          UPDATE: apiURL + 'ville/',
          FIND_COMMUNE: apiURL + 'commune/findByVille/',

     },
     CITOYEN: {
          FIND_ALL: apiURL + 'citoyen/',
          SAVE: apiURL + 'citoyen/',
          REMOVE: apiURL + 'citoyen/',
          FIND_BY_ID: apiURL + 'citoyen/',
          UPDATE: apiURL + 'citoyen/',
     },
     HABITAT: {
          FIND_ALL: apiURL + 'habitat/',
          SAVE: apiURL + 'habitat/',
          REMOVE: apiURL + 'habitat/',
          FIND_BY_ID: apiURL + 'habitat/',
          UPDATE: apiURL + 'habitat/',
     },
     QUARTIER: {
          FIND_ALL: apiURL + 'quartier/',
          SAVE: apiURL + 'quartier/',
          REMOVE: apiURL + 'quartier/',
          FIND_BY_ID: apiURL + 'quartier/',
          UPDATE: apiURL + 'quartier/',
          FIND_SECTEUR: apiURL + 'secteur/findByQuartier/',

     },
     SECTEUR: {
          FIND_ALL: apiURL + 'secteur/',
          SAVE: apiURL + 'secteur/',
          REMOVE: apiURL + 'secteur/',
          FIND_BY_ID: apiURL + 'secteur/',
          UPDATE: apiURL + 'secteur/',
     },
     TYPE_HABITAT: {
          FIND_ALL: apiURL + 'typeHabitat/',
          SAVE: apiURL + 'typeHabitat/',
          REMOVE: apiURL + 'typeHabitat/',
          FIND_BY_ID: apiURL + 'typeHabitat/',
          UPDATE: apiURL + 'typeHabitat/',
     },
     User: {
          FIND_ALL: apiURL + 'user/',
          SAVE: apiURL + 'user/',
          REMOVE: apiURL + 'user/',
          FIND_BY_ID: apiURL + 'user/',
          UPDATE: apiURL + 'user/',
     },

     AUTH: {
          LOGIN: apiURL + 'auth/authenticate'
     },

};
