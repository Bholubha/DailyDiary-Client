import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [status, setStatus] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setStatus(0);
    }, 1000);

  }, [status])

  const createPost = async () => {
    console.log("Hello");
    axios.post("http://localhost:8000/user/register", { username, password })
      .then((response) => {

        console.log(response)
        setStatus(1);
        setTimeout(() => {
          navigate("../");
        }, 1000);

      })
      .catch(function (error) {
        setStatus(2);
        setpassword("");
        setusername("");
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

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username
                    </label>

                    <input id="uname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => { setusername(e.target.value) }} name="username" type="text" placeholder="Username" value={username} />


                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>

                    <input id="ps" className={`shadow appearance-none border  ${status === 2 && 'border-red-500'} ${password.length < 8 && 'border-red-500'} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`} onChange={(e) => { setpassword(e.target.value) }} value={password} type="password" placeholder="******************" />


                    {status === 2 && <p className="text-red-500 text-xs italic">Usename Already Exist</p>}

                    {password.length < 8 && status ===0 && < p className="text-red-500 text-xs italic">Password contain atlest 8 character</p>}

                    {status === 1 && <p className="text-green-500 text-xs italic">Successfully registered...</p>}



                  </div>

                  <div className="flex items-center justify-center">


                    <button onClick={createPost} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Register
                    </button>





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

export default Register