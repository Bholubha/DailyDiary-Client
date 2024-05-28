import { React, useState, useEffect } from 'react'
import axios from 'axios'
import First from './First';
import '../ImageGallery.css'


function Show({ email }) {

  const [images, setImage] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    console.log(email)
    if (email.length === 0) {
       document.getElementById("guide").innerHTML = "For Save Your Day Please Log-in Or Register"
    
      return;
    }
    setIsLogin(true)
    axios.post("https://daily-diary-backend.up.railway.app/memory/show", { email })
      .then((response) => {
        setImage(response.data.img);
        console.log(response)
      })
      .catch((e) => {
        console.log(e);
      });

  }, [])

  if(!isLogin){
    return(
      <>
      <div id="guide"></div>
      <First />
      </>
    );
  }

  return (
    <div >

      <div className='absolute top-40 w-full'>
       
        <div className="image-gallery">
          {images.map((image) => (
            <div className="image-container" key={image._id}>
              <div className='date'>{image.date}</div>
              {image.images.map((source, index) => ( // Added index parameter for the key attribute
                <img key={index} src={(source)} alt={image.title} className="image" /> // Added key attribute
              ))}
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