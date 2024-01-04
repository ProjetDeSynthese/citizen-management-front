import { Commune } from "./commune";

export interface Quartier {
    id ? : string
    name : string,
    code : string,
    commune : Commune,
}
