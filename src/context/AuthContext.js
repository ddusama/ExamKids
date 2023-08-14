import axiosClient from "../config/axiosConfig";
import React, {createContext, useState} from 'react'
import jwt_decode from "jwt-decode";

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const signUp = async (data) => {
        try {
            setIsLoading(true)
            const response = await axiosClient.post('/api/v1/auth/register', data)
            setIsLoading(false)
            const token = response.data.token;
            setUserToken(token)
            setUserInfo(jwt_decode(token))
        } catch (e) {
            setIsLoading(false)
            throw e;
        }
    }
    const login = async ({email, password}) => {
        try {
            setIsLoading(true)
            const response = await axiosClient.post('/api/v1/auth/authenticate', {
                email,
                password
            })
            setIsLoading(false)
            const token = response.data.token

            setUserToken(token)
            setUserInfo(jwt_decode(token))
        } catch (e) {
            setIsLoading(false)
            throw e;
        }
    }
    const logout = () => {
        console.log('Logout')
        setUserToken(null)
        setUserInfo(null)
    }

    return (
        <AuthContext.Provider value={{login, logout, signUp, isLoading, userToken, userInfo}}>
            {children}
        </AuthContext.Provider>
    )
}