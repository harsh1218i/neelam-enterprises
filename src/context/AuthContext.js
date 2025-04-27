"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider, facebookProvider, twitterProvider, db } from "../../firebaseConfig";
import { onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [profileComplete, setProfileComplete] = useState(false); // ✅ NEW

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                // ✅ Check if user's profile exists
                const userDoc = await getDoc(doc(db, "users", currentUser.uid));
                if (userDoc.exists()) {
                    setProfileComplete(true); // Profile completed
                } else {
                    setProfileComplete(false); // Not completed
                }
            } else {
                setUser(null);
                setProfileComplete(false);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setProfileComplete(false);
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
        <AuthContext.Provider value={{ user, loading, profileComplete, logout, loginWithGoogle, loginWithFacebook, loginWithTwitter }}>
            {children}
        </AuthContext.Provider>
    );
};
