import {React, useState,useEffect} from 'react'
import axios from 'axios'
import '../ImageGallery.css'


function Show({username}) {

    const [images, setImage] = useState([]);

useEffect(() => {
   console.log(username)
    axios.post("https://memory-server-pi.vercel.app/memory/show",{username})
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

       <div className="image-gallery">
       {images.map((image) => (
        <div className="image-container" key={image.title}>
          <img src={image.image} alt={image.title} className="image" />
          <div className="image-title">{image.title}</div>
          <div className="image-description">{image.description}</div>
        </div>
      ))}
      

      </div>
      </div>
    </div>
  )
}

export default Show