import { Outlet, useLocation, Navigate } from "react-router-dom";

// instead of doing it with state, 
// checking if uid exist, if yes, user is loggedIn else not

export const PrivateRoute = () => {
    const location = useLocation();
     const  uid = localStorage.getItem("uid") || false;
    return uid ? <Outlet/> : <Navigate to="/login" state={{from: location}}/>;
}