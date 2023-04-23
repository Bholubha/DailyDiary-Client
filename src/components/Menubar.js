import React from 'react'
import { Link } from 'react-router-dom'
const  Menubar = () =>{

  return (
    <div >
    
      <div className='absolute top-40 w-full'>
        
        <div className='relative flex justify-center space-x-10'>
         
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-600">

            <div className="px-3 py-4">
            <span>
              <Link to = "insert">
                <h1 className='font-mono  text-white text-4xl text-center'>Insert your memory</h1>
              </Link>
            </span>
              </div>
            </div>
            <div  className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-600">

            <div className="px-3 py-4">
            <span>
              <Link to = "show">
                <h1 className='font-mono  text-white text-4xl text-center'>Show Your Memory</h1>
              </Link>
            </span>
              </div>

            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-600">

            <div className="px-3 py-4">
            <span>
              <a href="/">
                <h1 className='font-mono  text-white text-4xl text-center'>Update Memory</h1>
              </a>
            </span>
              </div>

            </div>

     
            </div>
        </div>
      </div>



  )
}

export default Menubar