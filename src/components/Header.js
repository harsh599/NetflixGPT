import React , {useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch} from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, NETFLIX_SIGNOUT_IMAGE } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const singOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
        }).catch((error) => {
        // An error happened.
        console.warn(error);
        navigate("/error");
        });
    }

       useEffect(()=> {
       const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL: photoURL}));
                navigate("/browse");
            }else{
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    },[]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
         className='w-44 '
         src={NETFLIX_LOGO}
         alt='Netflix_Logo'></img>

        <div className="px-2">
           
            <button onClick={singOut}>  <img 
            className = "w-14 h-12"
            src = {NETFLIX_SIGNOUT_IMAGE}
            alt="Netflix_Sign_Out_Button"
            /><span className="font-bold text-white">Sign Out</span></button>
        </div>

    </div>
    
  )
}

export default Header