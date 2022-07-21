import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Add from './screens/Add';
import Checkout from './screens/Checkout';
import History from './screens/History';
import Reports from "./screens/Reports"
import Security from './screens/Security';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/security" element={<Security/>}/>
    <Route path="/reports" element={<Reports/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/registration" element={<Registration/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Home/>}/>

     </Routes>
  </BrowserRouter>
  );
}

export default App;
