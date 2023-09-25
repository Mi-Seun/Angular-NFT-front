export interface userTypeOfClass {
    id?: number,
    email?: string,
    roles?:[],
    firstName?: string,
    lastName?: string
}

export interface ErrorNft {
    "error": string | undefined;
    "true": string | undefined;
}

// {

//     "id": 1,
//     "email": "reichel.zetta@hotmail.com",
//     "roles": [
//           "ROLE_USER"
//     ],
//     "firstName": "Zora",
//     "lastName": "Steuber"

// }