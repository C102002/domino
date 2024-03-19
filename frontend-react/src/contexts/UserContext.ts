import { createContext } from "react";
import { UserContextInterface, UserState } from "./interfaces/interfaces";

const INITIAL_VALUE = {
    user: {
        status:'not-authenticated', //'not-authenticated', //'checking','not-authenticated','authenticaded'
        photoURL: '',
        displayName: '',
        email: '',
        uid: '',
        errorMessage: null,
        errorCode: null,
    },
    setUser: (user: UserState, payload:UserState) => {
        console.log('cambio');
        user.status=payload.status //'not-authenticated', //'checking','not-authenticated','authenticaded'
        user.displayName=payload.displayName;
        user.email=payload.email;
        user.photoURL=payload.photoURL;
        user.uid=payload.uid;
        user.errorMessage=payload.errorMessage;
        user.errorCode=payload.errorCode;
    }
} as UserContextInterface

export const UserContext = createContext<UserContextInterface>(INITIAL_VALUE);