import { useState } from "react"
import { UserContext } from "./UserContext"
import { UserState, props } from "./interfaces/interfaces"

const InitialState={
    status:'not-authenticated',
    photoURL: '',
    displayName: '',
    email: '',
    uid: ''
}

export const UserProvider = ({children}: props) => {

    const [user, setUser] = useState<UserState>(InitialState)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}