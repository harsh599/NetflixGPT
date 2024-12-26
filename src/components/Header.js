import React from 'react'
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
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

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
         className='w-44 '
         src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7b21-92dd-d4d4b93ad8a6/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         alt='Netflix_Logo'></img>

        <div className="px-2">
           
            <button onClick={singOut}>  <img 
            className = "w-14 h-12"
            src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fnetflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg&f=1&nofb=1&ipt=0e9a4b010d0ba519b49e071c2ea25719f3a2efd18975c1f92b8ed649c7d04012&ipo=images"
            alt="Netflix_Sign_Out_Button"
            /><span className="font-bold text-white">Sign Out</span></button>
        </div>

    </div>
    
  )
}

export default Header