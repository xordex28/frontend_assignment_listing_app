export interface AuthModel {
    username: string;
    password: string;
}

export interface User {
    _id?: string;
    username?: string;
    accesToken?: string;
    firstName?: string;
    lastName?: string;
    updatedDate?: string;
    role?: string | object;
    permits?: [];
    loggedIn?: boolean;
    active?: boolean;
}


