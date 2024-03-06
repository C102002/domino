import { useState } from "react"
import { UserContext } from "./UserContext"
import { UserState, props } from "./interfaces/interfaces"

export const UserProvider = ({children}: props) => {

    const [user, setUser] = useState<UserState>({
        img: '',
        username: '',
        email: '',
        id: ''
    })

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}