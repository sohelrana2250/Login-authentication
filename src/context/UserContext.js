import React, { createContext, useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
const auth = getAuth(app);



export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (profile) => {

        return updateProfile(auth.currentUser, profile);
    }

    const Login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);
        })

        return () => { return unsubscribe() }


    }, [])

    const LogOut = () => {

        return signOut(auth);
    }

    const GoogleSingIn = () => {

        return signInWithPopup(auth, googleProvider);
    }



    const authInfo = { user, createUser, profileUpdate, Login, LogOut, GoogleSingIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default UserContext;