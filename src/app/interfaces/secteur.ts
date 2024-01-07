import { Quartier } from "./quartier";

export interface Secteur {
    id ? : string,
    name : string,
    code : string,
    quartier : Quartier,
}
