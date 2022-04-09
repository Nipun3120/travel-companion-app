import { createContext, useState, useContext } from "react";
const currentUserContext = createContext();

export const CurrentUserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('');
    return(
        <currentUserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </currentUserContext.Provider>
    )
}

export const useCurrentUserContext = () => {
    return useContext(currentUserContext);
}