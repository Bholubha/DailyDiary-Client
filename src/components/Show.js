import {React, useState,useEffect} from 'react'
import axios from 'axios'

function Show({username}) {

    const [image, setImage] = useState([]);

useEffect(() => {
   console.log(username)
    axios.post("http://localhost:8000/memory/show",{username})
    .then((response)=>{
          setImage(response.data.img);
    })
    .catch((e)=>{
       console.log(e);
    });

}, [])

  return (
    <div >
        <div className='absolute top-40 w-full'>

       <div className='relative flex justify-center w-full '>
    {
        image.map((post)=><img className='w-[20%] h-[20%] px-2' src={post.image} alt="memory" />)
    }
      

      </div>
      </div>
    </div>
  )
}

export default Show