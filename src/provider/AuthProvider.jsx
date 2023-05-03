import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

// Creating Context
export const AuthContext = createContext(null)

const auth = getAuth(app)

// Google Provider
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // Declaring the states;
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    /*-----------------------------------------------------------
                Google Provider
    --------------------------------------------------------------*/
    // SignIn with Google Account
    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const signOutGoogle = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    /*-----------------------------------------------------------
              End of  Google Provider
    --------------------------------------------------------------*/

    // All the components passed through this;
    const authInfo = {
        googleSignIn,
        signOutGoogle,
        user,
        error,
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
