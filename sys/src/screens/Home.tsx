import React, { useEffect,useState } from "react";
import {db,storage,auth} from '../firebase'
import Cards from '../components/Cards'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const[data,setData]=useState<any>([])
  const navigate = useNavigate();
    

  useEffect(() => {
    db.collection("inventory").onSnapshot(querySnapshot=>{
        setData(querySnapshot.docs.map(doc=>({ ...doc.data(), id: doc.id })))
      })
}, [])

useEffect(() => {
  var user = auth.currentUser;
  if(user){
  db.collection("users").where("email","==",user.email)
  .onSnapshot((querySnapshot) => {
   // console.log(querySnapshot.docs.map(doc=>(doc.data()))[0].userType == "boss")
    if(querySnapshot.docs.map(doc=>(doc.data()))[0]?.userType == "boss"){
      navigate("/reports")
    }else if(querySnapshot.docs.map(doc=>(doc.data()))[0]?.userType == "security"){
      navigate("/security")
    }else{
      console.log("you are in the right place")
    }
})

  }
}, [])

//console.log(data)
  return (
    <div>
        <Header/>
        <div className='' style={{"display":"grid","gridTemplateColumns":"1fr 1fr 1fr"}}>
          {
            data.map((e:any)=>(
              <Cards {...e}/>
            ))
          }
        
        </div>
      
    </div>
  )
}
