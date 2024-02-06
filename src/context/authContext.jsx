import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(
        localStorage.getItem("user")) || null
    )

    const login = async(inputs) => {
        const response = await axios.post("/auth/login", inputs)
        setCurrentUser(response.data)
    }

    const logout = async(inputs) => {
        await axios.post("/auth/logout", inputs)
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return(  
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
    
}