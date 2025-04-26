// /context/AuthContext.js

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider, facebookProvider, twitterProvider } from "../../firebaseConfig";
import { onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    const loginWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider);
    };

    const loginWithFacebook = async () => {
        await signInWithPopup(auth, facebookProvider);
    };

    const loginWithTwitter = async () => {
        await signInWithPopup(auth, twitterProvider);
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout, loginWithGoogle, loginWithFacebook, loginWithTwitter }}>
            {children}
        </AuthContext.Provider>
    );
};