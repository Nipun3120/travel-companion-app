import { Navigate, Outlet } from "react-router-dom";
import { useLoggedInStatus } from "../contexts/userLoggedInStatus";

export const PrivateRoute = ()=> {
     const { isLoggedIn } = useLoggedInStatus();
     console.log( isLoggedIn )
     return isLoggedIn ? <Outlet/> : <Navigate to="/login" />
}