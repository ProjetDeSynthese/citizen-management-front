import { Commune } from "./commune";

export interface Quartier {
    id ? : string,
    name : string,
    commune : Commune,
}
