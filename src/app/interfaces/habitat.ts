import { Secteur } from './secteur';
import { TypeHabitat } from './type-habitat';

export interface Habitat {
     id?: String;
     description: String;
     proprietaire: String;
     latitude: any;
     longitude: any;
     secteur: Secteur;
     image: String[];
     prix: any;
     typeHabitat: TypeHabitat;
}
export interface SidebarHabitat {
     label?: string;
     icon?: string;
     routerlink?: string;
     item?: SidebarHabitat[];
}
