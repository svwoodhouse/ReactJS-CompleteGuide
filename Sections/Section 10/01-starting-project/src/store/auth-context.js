import { useState, useEffect } from "react";
import React from 'react';

// Create context object; Takes a default context or aap/component wide state
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: () => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')
    };

    const loginHandler = () => {
        localStorage.setItem("isLoggedIn","1")
        setIsLoggedIn(true);
    };

    useEffect(() => {
        const storedUserLoggedInformation = localStorage.getItem('isLoggedIn')
    
        if(storedUserLoggedInformation === '1') {
          setIsLoggedIn(true)
        }
      }, [])

    return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>
}

export default AuthContext;