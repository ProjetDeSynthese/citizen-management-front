import { Secteur } from "./secteur";
import { TypeHabitat } from "./type-habitat";

export interface Habitat {

      id ?: String,
      description :String,
      proprietaire : String,
      latitude : DoubleRange,
      longitude :DoubleRange,
      secteur : Secteur,
      image: String [],
      typeHabitat : TypeHabitat
}
