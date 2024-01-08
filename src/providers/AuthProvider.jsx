import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
        setLoading(true)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
        setLoading(true)
    }

    //google login
    const googleLogin = ()=>{
        return signInWithPopup(auth,provider)
    }
    const logOut = ()=>{
        return signOut(auth);
        setLoading(true)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('currentUser', currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;