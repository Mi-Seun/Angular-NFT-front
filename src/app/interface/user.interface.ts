export interface userTypeOfClass {
    id?: number,
    email?: string,
    roles?:[],
    firstname?: string,
    lastname?: string,
    ismale?: boolean,
    datebirth?: number,
    adnum?: number,
    adstreet?: string,
    adcity?: string,
    adpostalcode?: string,


}

/*
"id": 1,
"email": "misun@jang.com",
"roles": [
      "ROLE_ADMIN",
      "ROLE_USER"
],
"ismale": false,
"firstname": "Mi-Sun",
"lastname": "JANG",
"datebirth": "2020-01-01T00:00:00+00:00",
"adnum": 3,
"adstreet": "Rue René",
"adcity": "Lyon",
"adpostalcode": "69001"
}
*/