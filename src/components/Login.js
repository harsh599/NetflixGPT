import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const[isSignInForm, setIsSignInForm] = useState(true);

const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
}

  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/CA-en-20241216-TRIFECTA-perspective_291e2bbc-f0c7-437d-904b-50007c3f49f4_large.jpg" 
            alt = "Netflix_Background_Image"/>
        </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
                 <h1 className="text-3xl font-bold py-4"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type = "text" placeholder = "Enter Full Name" className='p-4 my-4 w-full bg-gray-800'/>}
                <input type = "text" placeholder = "Enter User Name" className='p-4 my-4 w-full bg-gray-800'/>
                <input type = "password" placeholder = "Enter Password" className='p-4 my-4 w-full bg-gray-800'/>
                <button className="p-4 my-6 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer" onClick = {toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?Sign In Now"} </p>
            </form>
    </div>
  )
}

export default Login