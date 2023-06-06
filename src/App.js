import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Menubar from './components/Menubar';
import Register from './components/Register';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Insertion from './components/Insertion';
import Show from './components/Show';

const App = () => {
  const [username, setusername] = useState("bhai");
  const defineUser = (name) => {
    setusername(name);

  }

  return (
    <>
      <Navbar />
      <div className=''> <img src="/background.jpg" alt="" className='w-full ' /></div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login defineUser={defineUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menubar" element={<Menubar />} />
        <Route path="/menubar/insert" element={<Insertion username={username} />} />
        <Route path="/menubar/show" element={<Show username={username} />} />
        
      </Routes>

    </>
  );



}

export default App