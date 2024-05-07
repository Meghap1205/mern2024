//context api : share data btw components wothout explicite passing, globally store

import { createContext, useContext, useEffect, useState } from "react";

export const Authcontext = createContext();   //context

export const AuthProvider = ({ children }) => {  //provider

    const [token, setToken] = useState(localStorage.getItem("token"));  //for token remove at logout
    const [user, setUser] = useState(""); //user data
   
    const storeTokenInLs = (serverToken) => {
        setToken(serverToken);  //fixing problem of need of refreshing page after login
        return localStorage.setItem("token", serverToken);
    };

    let isloggedIn = !!token;

    //tackling out logout
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };


    //JWT authentication - making global currenty logged in user data, phone, usrname, email..  so other page can use that

    const useAuthentication = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method : "GET",
                headers: {
                    Authorization: `Bearer ${token}`,  //we send token to backend
                },
            });

            if(response.ok){
                const data = await response.json();
                console.log("stored user data  = auth.jsx" ,data.userData);  //res body = data and in that userdata obj 
                setUser(data.userData);
            }

        } catch (error) {
            console.log("error from fetching user data");
        }
    };


    useEffect(()=>{
        useAuthentication();
    }, []);

    return (<Authcontext.Provider value={{isloggedIn, storeTokenInLs, LogoutUser, user}}>
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