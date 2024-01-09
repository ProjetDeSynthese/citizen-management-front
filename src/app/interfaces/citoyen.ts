import { Habitat } from "./habitat";

export interface Citoyen {
    id? :String ,
    name :String ,
    prenom:String ,
    sexe:String ,
    email :String ,
    situationMat :String ,
    phone:String ,
    nationalite :String ,
    profession :String ,
    numCni :String ,
   habitat : any[]
}
