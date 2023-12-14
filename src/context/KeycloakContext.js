import { createContext, useContext, useState } from "react"

const KeycloakContext = createContext({})

const KeycloakContextProvider = ({ children }) => {

    const [token, setToken] = useState()
    const isTokenSet = () => !!token

    const withToken = (headers) => {
        if(!isTokenSet)
            return headers
        return {...headers, Authorization: `bearer ${token}`}
    }

    const value = {
        setToken,
        isTokenSet,
        withToken
    }

    return <KeycloakContext.Provider value={value}>
        {children}
    </KeycloakContext.Provider>

}

export default KeycloakContextProvider
export const useKeycloakContext = () => useContext(KeycloakContext)