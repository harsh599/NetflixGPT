import React , {useEffect, useState} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import { addUser, removeUser, updateUserLoggedIn } from '../utils/userSlice';
import { NETFLIX_LOGO, NETFLIX_SIGNOUT_IMAGE,SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const showGptSearch = useSelector(store => store?.gpt?.showGptSearch);
    const isUserLoggedIn = useSelector(store => store?.user?.isUserLoggedIn);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
        dispatch(updateUserLoggedIn(true));
        }).catch((error) => {
        // An error happened.
        console.warn(error);
        dispatch(updateUserLoggedIn(true));
        
        // navigate("/error");
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

    const handleGptSearchClick = ()=>{
        dispatch(toggleGptSearchView());
    };

    const handleLangChange = (e)=>{
        dispatch(changeLanguage(e.target.value));
    }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row ">
        <img
         className='w-44 mx-auto md:mx-0'
         src={NETFLIX_LOGO}
         alt='Netflix_Logo'></img>

       {isUserLoggedIn && ( <div className="flex p-2 justify-between">
            {showGptSearch && <select className="p-2 bg-gray-800 text-white my-2 rounded-lg" onChange={handleLangChange}>
               {SUPPORTED_LANGUAGES.map(lang => <option key = {lang.identifier} value = {lang.identifier}>{lang.name}</option>)} 
            </select>}
           <button className="py-0 px-4 mx-4 my-4 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Home" : "GPT Search"}</button>
            <button onClick={handleSignOut}>  <img 
                className = "w-14 h-12"
                src = {NETFLIX_SIGNOUT_IMAGE}
                alt="Netflix_Sign_Out_Button"
                /><span className="font-bold text-white">Sign Out</span></button>
        </div>)}

    </div>
    
  )
}

export default Header