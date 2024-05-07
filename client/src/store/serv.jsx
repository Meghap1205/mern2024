import { createContext, useContext, useEffect, useState } from "react";

// Create context for service provider
export const ServContext = createContext();

// Custom service provider component
export const ServProvider = ({ children }) => {
    const [service, setService] = useState([]);

    // Function to fetch services
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

    useEffect(() => {
        getServices();
    }, []);

    return (
        <ServContext.Provider value={{ service }}>
            {children}
        </ServContext.Provider>
    );
};

// Custom hook to consume the service context
export const useServ = () => {
    const servContextValue = useContext(ServContext);

    if (!servContextValue) {
        throw new Error("useServ used outside of provider/ not wrapped in main.jsx");
    }

    return servContextValue;
};
