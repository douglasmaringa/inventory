import React, { useEffect,useState } from "react";
import {db,auth} from '../firebase'
import { useNavigate } from 'react-router-dom';


export default function Security() {
    const[data,setData]=useState<any>([])
    const[department,setDepartment]=useState<string>("")
    const[deviceType,setDeviceType]=useState<string>("")
    const navigate = useNavigate();

    useEffect(() => {
      db.collection("checkout").orderBy('timestamp', 'asc').onSnapshot(querySnapshot=>{
          setData(querySnapshot.docs.map(doc=>({ ...doc.data(), id: doc.id })))
        })
  }, [])

  const byDep =()=>{
    db.collection("checkout").where("department","==",department).orderBy('timestamp', 'asc').onSnapshot(querySnapshot=>{
        setData(querySnapshot.docs.map(doc=>({ ...doc.data(), id: doc.id })))
      })
  }

  const byType =()=>{
    alert("clicked")
    db.collection("checkout").where("deviceType","==",deviceType).orderBy('timestamp', 'asc').onSnapshot(querySnapshot=>{
        setData(querySnapshot.docs.map(doc=>({ ...doc.data(), id: doc.id })))
      })
  }

  const logout = () => {
    
      auth.signOut();
      
      navigate("/login")
    
  }

  return (
    <div>
        <div className="bg-blue-700">
        <button onClick={logout}  className="text-lg font-medium text-white dark:text-blue-500 hover:underline">Logout</button>
          <h1 className="text-white font-bold text-xl text-center">Welcome Security Team</h1> 
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr"}}>
            <div className="mx-10 mt-4">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Device Type</label>
            <select value={deviceType} onChange={(e)=>{setDeviceType(e.target.value)}} className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Filter by device type</option>
  <option value="laptop">Laptop</option>
  <option value="phone">Phone</option>
  <option value="watch">Watch</option>
  <option value="laptop">Printer</option>
  <option value="phone">Server</option>
  <option value="watch">Accessories</option>
</select>
<button onClick={byType} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Filter</button>
       
            </div>

            <div className="mx-10 mt-4">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Department</label>
            <select value={department} onChange={(e)=>{setDepartment(e.target.value)}} className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Filter by Department</option>
  <option value="HR">HR</option>
  <option value="security">security</option>
  <option value="operations">operations</option>
  <option value="marketing">marketing</option>
  <option value="finance">finance</option>
  <option value="logistics">logistics</option>
</select>
<button onClick={byDep} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Filter</button>
       
            </div>
           
            
        </div>
        <div className="mt-10 overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6">
                    Device Type
                </th>
                <th scope="col" className="py-3 px-6">
                    Original Stock
                </th>
                <th scope="col" className="py-3 px-6">
                    Devices Sent
                </th>
                <th scope="col" className="py-3 px-6">
                    Devices Remaining
                </th>
                <th scope="col" className="py-3 px-6">
                    Department
                </th>
                <th scope="col" className="py-3 px-6">
                    Server TimeStamp
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((e:any)=>(
                    <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {e.name}
                </th>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {e.deviceType}
                </th>
                <td className="py-4 px-6">
                    {e.oldCount}
                </td>
                <td className="py-4 px-6">
                    {e.amountSent}
                </td>
                <td className="py-4 px-6">
                    {e.newCount}
                </td>
                <td className="py-4 px-6">
                   {e.department}
                </td>
                <td className="py-4 px-6">
                    {e.timestamp.seconds}
                </td>
            </tr>
            
           
                    </>
                ))
            }
            
        </tbody>
    </table>
</div>
        </div>
  )
}
