import React, { useEffect,useState } from "react";
import {db,storage} from '../firebase'
import firebase from "firebase";
import { useNavigate,useLocation} from 'react-router-dom';
import Cards from '../components/Cards'
import Header from '../components/Header'

interface data  {
    name: string;
    count:string;
    deviceType:string;
    thumbnail:string;
    id:string;
  };



export default function Checkout() {
    const location = useLocation()
    const navigate = useNavigate();
    
    
    
    let data = location.state as data;
    

      const[department,setDepartment]=useState<string>("")
    const[name,setName]=useState<string>(data.name)
    const[deviceType,setDeviceType]=useState<string>(data.deviceType)
    const[count,setCount]=useState<string>("")

    const save = async (e:React.MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault() // this stops the refresh
        
        db.collection('checkout').add({
                    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                    name:name,
                    department:department,
                    deviceType:deviceType,
                    oldCount:data.count,
                    newCount:parseInt(data.count) - parseInt(count),
                    amountSent:count
                })

                db.collection('inventory').doc(data.id).update({
                    count:parseInt(data.count) - parseInt(count)
                   })
               
                alert("saved")
                navigate("/")
        
     }
   
  return (
    <div>
        <Header/>
        <div className='' >
        <div className='mt-4' style={{"display":"grid","gridTemplateColumns":"1fr 1fr"}}>
        <div className='ml-10' style={{"display":"grid","gridTemplateColumns":"1fr 1fr"}}>
   
    <div>
    <div className="flex items-center ">
<a href="#">
        <img className="p-8 rounded-t-lg" src="http://www.ipcconsultants.com/wp-content/uploads/2019/09/HR-career.png" alt="product image" width={200}/>
    </a>
    <input id="default-radio-1" type="radio" value="https://p.kindpng.com/picc/s/194-1945645_transparent-laptop-png-laptop-mac-image-png-png.png" onChange={()=>{setDepartment("HR")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Human Resource Department</label>
</div>
<div className="flex items-center mt-8">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/What-is-Cyber-Security.jpg" alt="product image" width={200}/>
    </a>
    <input  id="default-radio-2" type="radio" value="https://www.kaspersky.com/content/en-global/images/repository/isc/2017-images/What-is-Cyber-Security.jpg" onChange={()=>{setDepartment("security")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Security Department</label>
</div>
<div className="flex items-center ">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://rm-15da4.kxcdn.com/wp-content/uploads/2014/11/Operations-Management-300x300.jpg" alt="product image" width={200}/>
    </a>
    <input id="default-radio-1" type="radio" value="https://pngimg.com/uploads/printer/printer_PNG7756.png" onChange={()=>{setDepartment("operations")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Operations Department</label>
</div>
    </div>


    <div>
    <div className="flex items-center">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://www.feedough.com/wp-content/uploads/2020/08/what-is-marketing.webp" alt="product image" width={200}/>
    </a>
    <input  id="default-radio-2" type="radio" value="https://pngimg.com/uploads/server/server_PNG59.png" onChange={()=>{setDepartment("marketing")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marketing Department</label>
</div>

<div className="flex items-center ">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://www.churchill.ac.zw/wp-content/uploads/2018/06/5_0016_apple-brainstorming-business-908288.jpg" alt="product image" width={200}/>
    </a>
    <input  id="default-radio-2" type="radio" value="https://p.kindpng.com/picc/s/194-1945645_transparent-laptop-png-laptop-mac-image-png-png.png" onChange={()=>{setDepartment("finance")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Finance Department</label>
</div>

<div className="flex items-center ">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://www.michiganstateuniversityonline.com/wp-content/uploads/sites/3/2014/04/logistics-fundamentals-supply-chain.jpg?w=715&h=375&crop=1" alt="product image" width={200}/>
    </a>
    <input  id="default-radio-2" type="radio" value="https://backoffice.xlsafrica.net/backoffice/uploads/sub_cat_pictures/laptop_accessories.png" onChange={()=>{setDepartment("logistics")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Logistics Department</label>
</div>

    </div>


 </div>


<div className="p-4 ml-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Send {data.name} to Other Departments</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Device Name</label>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
        </div>

        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How Many {data.count}</label>
            <input value={count} onChange={(e)=>{setCount(e.target.value)}} type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
        </div>

        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Device Type</label>
            <select value={deviceType} onChange={(e)=>{setDeviceType(e.target.value)}} className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>What are you Sending?</option>
  <option value="laptop">Laptop</option>
  <option value="phone">Phone</option>
  <option value="watch">Watch</option>
  <option value="laptop">Printer</option>
  <option value="phone">Server</option>
  <option value="watch">Accessories</option>
</select>
        {
            data.count == "0"?(<>
             <button disabled className="w-full text-white bg-gray-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Out of Stock</button>
          
             </>):(<>
                <button onClick={save} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Device</button>
          
             </>)
        }
        
    </form>
</div>
</div>
        
        </div>
      
    </div>
  )
}
