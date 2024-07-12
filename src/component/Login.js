import React,{useState} from 'react';
import Header from './Header';

const Login = () => {
    const [toggleSignIn,setToggleSignIn] = useState(false);

    const handleSignIn = () => {
        setToggleSignIn((prev)=>(!prev));
    }
  return (
    <div>
    <Header/>
    <div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/7e30a1c8-d525-4106-8911-04b8461d6201/US-en-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_00121511-337d-4096-a35a-410ac453bf78_small.jpg"
    alt="background-img"/>
    </div>
    
    <form className="text-white bg-black w-3/12 p-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{toggleSignIn ? "Sign In" : "Sign Up" }</h1>
        <input className="bg-slate-700 rounded-md p-3 my-4 w-full" type="email" placeholder="email"></input>
        {!toggleSignIn && <input className="bg-slate-700 rounded-md p-3 my-4 w-full" type="text" placeholder="name"></input>}
        <input className="bg-slate-700 p-3 my-4 w-full" type="password" placeholder="password"></input>
        <button className="p-4 my-6 w-full rounded-md bg-red-600" type="submit">{toggleSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="cursor-pointer" onClick={handleSignIn}>{toggleSignIn ? "New User? Sign Up" : "Already have an account? Sign In" }</p>
    </form>



    </div>
  )
}

export default Login;