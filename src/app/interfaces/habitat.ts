import { Secteur } from './secteur';
import { TypeHabitat } from './type-habitat';

export interface Habitat {

      id ?: String,
      description :any,
      proprietaire : String,
      latitude : any,
      longitude :any,
      prix :any,
      secteur : Secteur,
      image: String [],
      typeHabitat : TypeHabitat
}
