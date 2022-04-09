import { useState, useContext, createContext } from "react";
const loggedInStatus = createContext();

export const LoggedInContextProvider = ({ children })=>{
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <loggedInStatus.Provider value={{ isLoggedIn, setLoggedIn }}>
            {children}
        </loggedInStatus.Provider>
)}

export const useLoggedInStatus = ()=> {
    return useContext(loggedInStatus)
}