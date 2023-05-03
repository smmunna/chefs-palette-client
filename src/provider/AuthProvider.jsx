import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

// Creating Context
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    // All the components passed through this;
    const authInfo = {
        displayName:"mUnna"
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
