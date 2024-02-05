import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const UserContext= createContext();

export const UserProvider = ({children})=>{
    const [user, setUser] = useState();
    const [checkUser, setCheckUser] = useState(true);
    // const [userUpdated, setUserUpdated]= useState(false)


    return (
        <UserContext.Provider value={{user, setUser, checkUser}}>
            {children}
        </UserContext.Provider>
    )
}