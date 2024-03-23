import {React, useState,useEffect} from 'react'
import axios from 'axios'
import '../ImageGallery.css'


function Show({username}) {

    const [images, setImage] = useState([]);

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

      <article>
  <img
    src="https://assets.codepen.io/1506195/unsplash-music-0.avif"
    alt="guitar player at concert"
  />
  <img
    src="https://assets.codepen.io/1506195/unsplash-music-1.avif"
    alt="duo singing"
  />
  <img
    src="https://assets.codepen.io/1506195/unsplash-music-2.avif"
    alt="crowd cheering"
  />
  <img
    src="https://assets.codepen.io/1506195/unsplash-music-3.avif"
    alt="singer performing"
  />
  <img
    src="https://assets.codepen.io/1506195/unsplash-music-4.avif"
    alt="singer fistbumping crowd"
  />
  <img
    src="https://assets.codepen.io/1506195/unsplash-music-5.avif"
    alt="man with a guitar singing"
  />
  <img
    src="https://assets.codepen.io/1506195/unsplash-music-6.avif"
    alt="crowd looking at a lighted stage"
  />
  <img
    src="https://assets.codepen.io/1506195/unsplash-music-7.avif"
    alt="woman singing on stage"
  />
</article>



    </div>
  )
}

export default Show