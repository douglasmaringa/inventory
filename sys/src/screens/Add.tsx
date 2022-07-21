import React, { useEffect,useState } from "react";
import {db,storage} from '../firebase'
import firebase from "firebase";
import Header from '../components/Header'

export default function Add() {
    const[device,setDevice]=useState<string>("")
    const[name,setName]=useState<string>("")
    const[deviceType,setDeviceType]=useState<string>("")
    const[count,setCount]=useState<string>()

    const save = async (e:React.MouseEvent<HTMLButtonElement>) =>{
         e.preventDefault() // this stops the refresh
         
         db.collection('inventory').add({
                     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                     name:name,
                     thumbnail:device,
                     deviceType:deviceType,
                     count:count,
                 })
                
                 alert("saved")
         
      }
    console.log(device)

  return (
    <div>
        <Header/>
       <div className='mt-4' style={{"display":"grid","gridTemplateColumns":"1fr 1fr"}}>
        <div className='ml-10' style={{"display":"grid","gridTemplateColumns":"1fr 1fr"}}>
   
    <div>
    <div className="flex items-center ">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://p.kindpng.com/picc/s/194-1945645_transparent-laptop-png-laptop-mac-image-png-png.png" alt="product image" width={200}/>
    </a>
    <input id="default-radio-1" type="radio" value="https://p.kindpng.com/picc/s/194-1945645_transparent-laptop-png-laptop-mac-image-png-png.png" onChange={()=>{setDevice("https://p.kindpng.com/picc/s/194-1945645_transparent-laptop-png-laptop-mac-image-png-png.png")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laptop</label>
</div>
<div className="flex items-center mt-8">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://www.pngkit.com/png/full/986-9865797_cell-phones-png-hd-iphone-6-plus-128gb.png" alt="product image" width={200}/>
    </a>
    <input  id="default-radio-2" type="radio" value="https://www.pngkit.com/png/full/986-9865797_cell-phones-png-hd-iphone-6-plus-128gb.png" onChange={()=>{setDevice("https://www.pngkit.com/png/full/986-9865797_cell-phones-png-hd-iphone-6-plus-128gb.png")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cell Phone</label>
</div>
<div className="flex items-center ">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://pngimg.com/uploads/printer/printer_PNG7756.png" alt="product image" width={200}/>
    </a>
    <input id="default-radio-1" type="radio" value="https://pngimg.com/uploads/printer/printer_PNG7756.png" onChange={()=>{setDevice("https://pngimg.com/uploads/printer/printer_PNG7756.png")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Printer</label>
</div>
    </div>


    <div>
    <div className="flex items-center">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://pngimg.com/uploads/server/server_PNG59.png" alt="product image" width={200}/>
    </a>
    <input  id="default-radio-2" type="radio" value="https://pngimg.com/uploads/server/server_PNG59.png" onChange={()=>{setDevice("https://pngimg.com/uploads/server/server_PNG59.png")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Server</label>
</div>

<div className="flex items-center ">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" width={200}/>
    </a>
    <input  id="default-radio-2" type="radio" value="https://p.kindpng.com/picc/s/194-1945645_transparent-laptop-png-laptop-mac-image-png-png.png" onChange={()=>{setDevice("https://p.kindpng.com/picc/s/194-1945645_transparent-laptop-png-laptop-mac-image-png-png.png")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Watches</label>
</div>

<div className="flex items-center ">
<a href="#">
        <img className="p-8 rounded-t-lg" src="https://backoffice.xlsafrica.net/backoffice/uploads/sub_cat_pictures/laptop_accessories.png" alt="product image" width={200}/>
    </a>
    <input  id="default-radio-2" type="radio" value="https://backoffice.xlsafrica.net/backoffice/uploads/sub_cat_pictures/laptop_accessories.png" onChange={()=>{setDevice("https://backoffice.xlsafrica.net/backoffice/uploads/sub_cat_pictures/laptop_accessories.png")}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accessories</label>
</div>

    </div>


 </div>


<div className="p-4 ml-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Save Device in to our Platform</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Device Name</label>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
        </div>

        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How Many</label>
            <input value={count} onChange={(e)=>{setCount(e.target.value)}} type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
        </div>

        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Device Type</label>
            <select value={deviceType} onChange={(e)=>{setDeviceType(e.target.value)}} className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>What are you Storing?</option>
  <option value="laptop">Laptop</option>
  <option value="phone">Phone</option>
  <option value="watch">Watch</option>
  <option value="laptop">Printer</option>
  <option value="phone">Server</option>
  <option value="watch">Accessories</option>
</select>
        
        <button onClick={save} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Device</button>
        
    </form>
</div>
</div>
    </div>
  )
}
