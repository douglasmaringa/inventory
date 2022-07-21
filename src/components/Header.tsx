import React, { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase'

export default function Header() {
  const[user,setUser]=useState([])
  const navigate = useNavigate();
  
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser:any) => {
      console.log("THE USER IS >>> ", authUser);
      
      if(authUser){
        setUser(authUser)
    }else{
        navigate("/")
    }
    });
  }, [navigate]);


  const logout = () => {
    if (user) {
      auth.signOut();
      
      navigate("/login")
    }
  }

 

  return (
    <div>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <button  className="flex items-center">
                <img src="https://scontent.fhre1-1.fna.fbcdn.net/v/t1.18169-9/27657005_879466548902541_4572072875937390797_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5ilKBXpqvksAX9sbwmJ&_nc_ht=scontent.fhre1-1.fna&oh=00_AT-oZDr474c2Vjtuplt8u604KTi5oMDseCFP6V-YJLjAQw&oe=62FEFC56"  className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Farm & City</span>
            </button>
            <div className="flex items-center">
                <button  className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(024) 2251162</button>
                <button onClick={logout}  className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Logout</button>
            </div>
        </div>
    </nav>
    <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
            <div className="flex items-center">
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                    <li>
                        <button  onClick={()=>{navigate("/")}} className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</button>
                    </li>
                    <li>
                        <button onClick={()=>{navigate("/add")}}  className="text-gray-900 dark:text-white hover:underline">Add Inventory</button>
                    </li>
                    <li>
                        <button onClick={()=>{navigate("/history")}} className="text-gray-900 dark:text-white hover:underline">Checkout History</button>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}
