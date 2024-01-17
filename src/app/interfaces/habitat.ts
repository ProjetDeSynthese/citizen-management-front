import { Proprietaire } from './proprietaire';
import { Quartier } from './quartier';
import { Secteur } from './secteur';
import { TypeHabitat } from './type-habitat';

export interface Habitat {

      id?: String,
      statut: String
      chambre: number
      douche: Number
      superficie: Number
      garage?: Number
      prix: String
      longitude: any
      latitude: any
      parking: number
      description: String
      proprietaire: Proprietaire
      image: String[],
      video: String
      quartier: Quartier
      typeMaison: TypeHabitat

}
