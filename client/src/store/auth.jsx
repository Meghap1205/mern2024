//context api : share data btw components wothout explicite passing, globally store

import { createContext, useContext } from "react";

export const Authcontext = createContext();   //context

export const AuthProvider = ({children}) => {  //provider

    const storeTokenInLs = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    return (<Authcontext.Provider value={{storeTokenInLs}}>
        {children}
    </Authcontext.Provider>
    );
};

export const useAuth = () => {
    const  authContextValue = useContext(Authcontext);
    
    if (!authContextValue){
        throw new Error("useAuth used outside of provider/  not wrappe in main.jsx");
    }
    return authContextValue;
}