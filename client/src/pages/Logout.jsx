import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
    const { LogoutUser } = useAuth();  //context-api

    useEffect(() => {
        LogoutUser();
    }, [LogoutUser]);

    // Make sure to return within a <React.Fragment> or a <Route> component
    return (
        <><Navigate to="/login" /></>
    );
};

export default Logout;
