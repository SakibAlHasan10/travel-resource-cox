import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext()
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../Config/firebase.config";
const AuthProvider = ({children}) => {
    const [booking, setBooking] =useState(true)
    const [user, setUser]= useState(null)
    const auth = getAuth(app)

    // set up booking form
    const googleProvider = new GoogleAuthProvider()
    const handleBooking =()=>{
        setBooking(!booking)
    }
    // signUp With google
    const signUpWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    // sign up with email and password
    const signUpWithEmail =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password )
    } 
    // sign in with email
    const signInWithEmail =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[auth])
    
    const authInfo = {
        booking,
        user,
        handleBooking,
        signUpWithGoogle,
        signUpWithEmail,
        signInWithEmail,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node
}
export default AuthProvider;