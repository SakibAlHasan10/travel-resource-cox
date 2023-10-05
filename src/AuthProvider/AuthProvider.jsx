import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext()
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Config/firebase.config";
const AuthProvider = ({children}) => {
    const [booking, setBooking] =useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const handleBooking =()=>{
        setBooking(!booking)
    }
    const signUpWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    
    const authInfo = {
        booking,
        handleBooking,
        signUpWithGoogle,
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