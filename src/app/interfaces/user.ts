export interface User {
     id?: String;
     nom_prenom: String;
     username: String;
     email: String;
     // numero :String ,
     password: String;
     status?: String;
     roleTem?: String;
     role?: String;
     //  habitats : Habitat[]
}

export interface credentials {
     accessToken: string;
     role: string;
}

export interface jwtTokenDecode {
     sub: string;
     iat: number;
     exp: number;
}
