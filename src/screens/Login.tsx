import React, { useEffect,useState } from "react";
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';

function Login() {
    const[email,setEmail]=useState<string>("")
    const[password,setPassword]=useState<string>("")

    const navigate = useNavigate();

    useEffect(() => {
        // will only run once when the app component loads...
    
        auth.onAuthStateChanged((authUser) => {
          console.log("THE USER IS >>> ", authUser);
         
          if(authUser){
            navigate('/');
          }
         
        });
      }, [navigate]);

    const signin =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        // login logic

    auth
    .signInWithEmailAndPassword(email,password)
    .then((auth)=>{
        // logged in, redirect to home
        navigate('/');
        
    })
    .catch(e => alert(e.message))
    }
  return (
   
<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-80 mt-20 flex flex-col">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" >
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" >
        Password
      </label>
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      
    </div>
    <div className="flex items-center justify-between">
    <button onClick={signin} className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <button onClick={()=>{navigate("/registration")}} className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="button">
       Don't have an account?
      </button>
    </div>
</div>
  )
}

export default Login