import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";


export const RequireAuth = ({ children }) => {
    const location = useLocation();
    let user = localStorage.getItem('user');
    console.log("user", user);

    useEffect(() => {
        user = localStorage.getItem('user');
    }, [location])

    return (user === 'true' ?
        children
        :
        <Navigate to={'/login'} state={{ from: location?.pathname }} replace />)
}