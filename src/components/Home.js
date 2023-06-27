import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
    <div className='absolute top-40 w-full'>
        
        <div className='relative flex justify-center space-x-10'>
         
           
            <div  className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-600">

            <div className="px-3 py-4">
            <span>
              <Link to="register">
                <h1 className='font-mono  text-white text-4xl text-center'>Sign UP Here</h1>
              </Link>
            </span>
              </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-600">

            <div className="px-3 py-4">
            <span>
              <Link to="login">
                <h1 className='font-mono  text-white text-4xl text-center'>Login</h1>
              </Link>
            </span>
              </div>

            </div>

     
            </div>
        </div></div>
  )
}

export default Home