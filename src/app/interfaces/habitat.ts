import { Proprietaire } from './proprietaire';
import { Quartier } from './quartier';
import { Secteur } from './secteur';
import { TypeHabitat } from './type-habitat';

export interface Habitat {

      id?: string,
      statut?: string
      chambre?: number
      douche?: number
      superficie?: Number
      garage?: number
      prix?: string
      longitude?: any
      latitude?: any
      parking?: number
      description?: string
      proprietaire?: Proprietaire
      image?: string[],
      video?: string
      quartier?: Quartier
      typeMaison?:TypeHabitat

}
