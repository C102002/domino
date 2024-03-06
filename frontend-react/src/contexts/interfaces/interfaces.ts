import { Dispatch, SetStateAction } from "react";

export interface props {
    children: JSX.Element | JSX.Element[]
}

export interface UserState {
    img: string;
    username: string;
    email: string;
    id: string;
}

export interface UserContextInterface {
    user: UserState;
    setUser: Dispatch<SetStateAction<UserState>>
}