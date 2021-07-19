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
    client?: string;
    categories?: {
        category?: string;
        canApprove?: boolean;
    }[]
}