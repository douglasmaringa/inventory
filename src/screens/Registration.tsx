import React, { useEffect,useState } from "react";
import {auth,db} from '../firebase'
import { useNavigate } from 'react-router-dom';

function Registration() {
    const[email,setEmail]=useState<string>("")
    const[password,setPassword]=useState<string>("")
    const[userType,setuserType]=useState<string>("")

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

    const signup =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault()
          auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth )=>{
             
                 db.collection('users').add({
                    email:email,
                    userType:userType,
                    })
                  
                   navigate("/")
            })
            .catch(e=> alert(e.message))
            
          
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
      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="*********" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      
    </div>

    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">User Type</label>
<select value={userType} onChange={(e)=>{setuserType(e.target.value)}} className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Who are you?</option>
  <option value="tech">Technology Department</option>
  <option value="security">Security Department</option>
  <option value="boss">Mnanagement</option>
</select>
    <div className="flex items-center justify-between">
    <button onClick={signup} className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
    </div>
</div>
  )
}

export default Registration