//context api : share data btw components wothout explicite passing, globally store

import { createContext, useContext, useEffect, useState } from "react";

export const Authcontext = createContext();   //context

export const AuthProvider = ({ children }) => {  //provider

    const [token, setToken] = useState(localStorage.getItem("token"));  //for token remove at logout
    const [user, setUser] = useState(""); //user data

    const [service, setService] = useState([]);



    const authorizationToken = `Bearer ${token}`;
   
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
                    Authorization:  authorizationToken,  //we send token to backend
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

    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/service", {
                method: "GET",
            });

            if (response.ok) {
                const data = await response.json();
                console.log("stored service data:", data); 
                setService(data.msg);
            } else {
                throw new Error(`Error fetching service data1: ${response.statusText}`);
            }
        } catch (error) {
            console.log("Error from fetching service data2:", error.message);
        }
    };


    useEffect(()=>{
        getServices();
        useAuthentication();
    }, []);

    return (<Authcontext.Provider value={{isloggedIn, storeTokenInLs, LogoutUser, user,  authorizationToken, service}}>
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