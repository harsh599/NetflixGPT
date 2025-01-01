import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidateData} from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_BACKGROUND_IMAGE, PHOTO_URL } from '../utils/constants';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[isSignInForm, setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    const [errorMessage, setErrorMessage] = useState();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleOnClick = () => {
        const errorMessage = checkValidateData(email.current.value,password.current.value);
        setErrorMessage(errorMessage);
        if(errorMessage)return;
        //Sign In / Sign Up logic
        if(!isSignInForm) {//SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                 const user = userCredential.user;
                updateProfile(user, {
                    displayName: fullName.current.value, photoURL: {PHOTO_URL}
                    }).then(() => {
                    // Profile updated!
                   
                    const {uid, email, displayName, photoURL} = auth;// doing it from auth, so that we get an updated version of user
                    dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL: photoURL}));
                    // navigate("/browse");
                    // ...
                    }).catch((error) => {
                    // An error occurred
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                    // ...
                    });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
                // ..
            });
        }else{//Sign in form
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // navigate("/browse");

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
        }



    };

  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src={NETFLIX_BACKGROUND_IMAGE} 
            className="h-screen object-cover"
            alt = "Netflix_Background_Image"
            />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
                <h1 className="text-3xl font-bold py-4"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref = {fullName} type = "text" placeholder = "Enter Full Name" className='p-4 my-4 w-full bg-gray-800'/>}
            <input ref = {email} type = "text" placeholder = "Enter User Name" className='p-4 my-4 w-full bg-gray-800'/>
            <input ref = {password} type = "password" placeholder = "Enter Password" className='p-4 my-4 w-full bg-gray-800'/>
            <button className="p-4 my-6 bg-red-700 w-full" onClick={handleOnClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="text-red-500 text-lg font-bold">{errorMessage}</p>
            <p className="cursor-pointer" onClick = {toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?Sign In Now"} </p>
        </form>
    </div>
  )
}

export default Login