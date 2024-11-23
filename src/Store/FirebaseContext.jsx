import { createContext } from "react";
import { useState, useEffect } from "react"; 
import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from "../FireBase/Config";

export const FirebaseContext = createContext(null); 
export const AuthContext = createContext(null); 

function Context({children}) {
    const [user, setUser] = useState(null) 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default Context