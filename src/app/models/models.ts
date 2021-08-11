export interface AuthModel {
    username: string;
    password: string;
}

export interface User {
    _id?: string;
    username?: string;
    accesToken?: string;
    token?: string;
    firstName?: string;
    lastName?: string;
    role?: string | Role;
    permits?: PermitApproved[];
    loggedIn?: boolean;
    createdDate?: string;
    updatedDate?: string;
    active?: boolean;
}

export interface Role {
    _id?: string;
    description?: string;
    canApprove?: boolean;
    canSuper?: boolean;
    permits?: PermitApproved[];
    createdDate?: string;
    updatedDate?: string;
    active?: boolean;
}

export interface PermitApproved {
    role?: boolean;
    client?: string;
    categories?: {
        category?: string;
        canApprove?: boolean;
    }[]
}

export interface Category {
    _id?: string;
    description?: string;
    createdDate?: string;
    updatedDate?: string;
    active?: boolean;
}
export interface Client {
    _id?: string;
    document?: string;
    shortName?: string;
    name?: string;
    phoneNumber?: string;
    email?: string;
    createdDate?: string;
    updatedDate?: string;
    active?: boolean;
}

export interface Task {
    id_?: string;
    client?: string;
    category?: string;
    description?: string;
    fields?: {
        type: string;
        name: string;
        value: string;
    }[];
    approved?: boolean;
    rejected?: boolean;
    answeredFor?: string;
    codeValidator?: string;
    qr?: string;
    createdDate?: string;
    updatedDate?: string;
    active?: boolean;
}

export interface TaskResponse {
    all?: Task[];
    answered?: Task[];
    entered?: Task[];
}