import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [booking, setBooking] =useState(true)
    const handleBooking =()=>{
        setBooking(!booking)
    }


    
    const authInfo = {
        booking,
        handleBooking
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