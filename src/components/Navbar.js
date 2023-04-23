import React from 'react'

const  Navbar = ()=> {
  return (
    <div className='absolute w-full z-10'>
    <div className="fixed w-full flex justify-between items-center p-1 bg-gray-600 shadow-md ">
    <div className="">
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" className='h-20' />
    </div>
    <div >
      <ul className='flex m-0 p-0 text-orange-600'>
        <li className='ml-10 mr-5'><a className = "no-underli cne font-bold" href="/"><strong>Home  </strong></a></li>
        <li className='ml-10 mr-5'><a className = "no-underli cne font-bold" href="/about">About</a></li>
        <li className='ml-10 mr-5'><a className = "no-underli cne font-bold" href="/contact">Contact</a></li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default Navbar