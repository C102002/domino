import { createContext } from "react";
import { UserContextInterface, UserState } from "./interfaces/interfaces";

const INITIAL_VALUE = {
    user: {
        img: '',
        username: '',
        email: '',
        id: ''
    },
    setUser: (user: UserState) => {}
} as UserContextInterface

export const UserContext = createContext<UserContextInterface>(INITIAL_VALUE);