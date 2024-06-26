import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Menubar from './components/Menubar';
import Register from './components/Register';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Insertion from './components/Insertion';
import Show from './components/Show';
import First from './components/First';
import ResetPassword from './components/ResetPassword'
// import './App.css'
const App = () => {
  const [email, setEmail] = useState("");
  const defineUser = (email) => {
    setEmail(email);

  }

  return (
    <>
      {/* <Navbar /> */}
      {/* <div className=''> <img src="/background.jpg" alt="" className='w-full ' /></div> */}
     
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/login" element={<Login defineUser={defineUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menubar" element={<Menubar email={email} />} />
        <Route path="/menubar/insert" element={<Insertion  />} />
        <Route path="/menubar/show" element={<Show />} />
        
      </Routes>

    </>
  );



}

export default App