import { Secteur } from "./secteur";

export interface Habitat {

      id ?: String,
      description :String,
      proprietaire : String,
      latitude : DoubleRange,
      longitude :DoubleRange,
      secteur : Secteur,
      image: String []
}
