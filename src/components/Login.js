import React from 'react'
import { useState,useEffect } from 'react';
import {  useNavigate} from "react-router-dom";
import axios from 'axios';


const Login = ({defineUser}) => {

   const [username, setusername] = useState("");
   const [password, setpassword] = useState("");
   const  [statuscode, setstatuscode] = useState(0);
   const navigate = useNavigate();


   useEffect(() => {
      setTimeout(() => {
        setstatuscode(0);
      }, 2000);
   }, [statuscode])
   

   const createPost  = ()=> {
        axios.post("https://memory-server-pi.vercel.app/user/login",{username,password})
    .then((response) => {

      if (response.data.verification) {
         defineUser(username);
        setstatuscode(1);
        console.log("verified");
        setTimeout(() => {
          navigate("../menubar");
        }, 1000);

     }else{
      defineUser(username);
      console.log("not verified");
      setstatuscode(2);
      setpassword("");
      setusername("");
     }
    })
    .catch(function (error) {
      console.log(error);
 });
          }

  return (
    
    <div>

<div className='='>

        <div className='absolute top-40 w-full'>

          <div className='relative flex justify-center w-full '>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-600">

                
               
                <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

    <div className="mb-4">

      <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>

      <input  value={username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) =>{setusername(e.target.value)}} name="username" type="text" placeholder="Username"/>
    

    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>

      <input value = {password} className={ `shadow appearance-none border ${statuscode===2 && 'border-red-500'}  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} onChange={(e) =>{setpassword(e.target.value)}} id="password" type="password" placeholder="******************"/>

      {statuscode===2 && <p className="text-red-500 text-xs italic">Password or username is wrong</p>}
      {statuscode===1 && <p className="text-green-500 text-xs italic">Successfully login...</p>}
      

    </div>

    <div className="flex items-center justify-center">
      

      
        <button type="button" onClick={createPost} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
     

      

      

    </div>

  </form>
  <p className="text-center text-gray-800 text-xs">
    &copy;2004 Vala All rights reserved.
  </p>

</div>
                 
             
             
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Login