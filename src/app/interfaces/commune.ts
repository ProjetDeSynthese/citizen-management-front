import { Ville } from "./ville"

export interface Commune {
    id ? : string
    name : string,
    code : string,
    ville: Ville
}
