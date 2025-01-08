import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { FcGoogle } from "react-icons/fc";

const GoogleSign = () => {
    const {googleSign} = useContext(AuthContext)
    const handlegoogleSign = () =>{
        googleSign()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log(errorMessage);
          });

    }

    return (
        <div>
            <button onClick={handlegoogleSign} className="btn btn-outline btn-secondary btn-wide text-center">Sign In with <FcGoogle /></button>
            
            
        </div>
    );
};

export default GoogleSign;