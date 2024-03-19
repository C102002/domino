import { Dispatch, SetStateAction } from "react";

export interface props {
    children: JSX.Element | JSX.Element[]
}

export interface UserState {
    status: string,
    photoURL: string|null;
    displayName: string;
    email: string;
    uid: string;
    errorMessage: null|string;
    errorCode: null|string;
}

export interface UserContextInterface {
    user: UserState;
    setUser: Dispatch<SetStateAction<UserState>>
}