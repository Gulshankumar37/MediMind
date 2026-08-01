import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react"
import { createContext } from "react";
import api from "../services/api"
const AuthContext = createContext();
export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);

    const getCurrentUser = async()=>{
        try{
            const res = await api.get("/auth/current");
            setUser(res.data.user)
        }
        catch(err){
            setUser(null)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getCurrentUser();
    },[])

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading,
                getCurrentUser
            }}
        >
            {children}

        </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext)