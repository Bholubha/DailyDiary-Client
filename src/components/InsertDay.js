import {React,useState} from 'react'
import style from './CSS/InsertDay.module.css'
function InsertDay() {

  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const fileList = e.target.files;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        setImages(prevImages => [...prevImages, { name: file.name, url: event.target.result }]);
      };

      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div className={style.container}>

      <form className={style.inputs}>
        <p>Title Your Day</p>

        <div className={style.title}>
          <input type="text" />
        </div>

        <p>Insert Some More Details</p>
        <div className={style.description}>
          <textarea name="description" id="description" cols="70" rows="4"></textarea>
        </div>
        <p>Upload Images</p>
        <div className={style.IMAGE}>
        <div className={style.uploadA}>
        <label htmlFor="file-upload" className="file-upload-label">
          <i className="fa-solid fa-upload fa-2xl"></i>
        </label>
        <input type="file" id="file-upload" className="file-upload-input" onChange={handleFileChange} multiple />
      </div>

      <div className={style.uploadedImages}>
        {images.map((image, index) => (
          <div key={index} className={style.imageCard}>
            <img src={image.url} alt={image.name} className={style.uploadedImage} />
          </div>
        ))}
      </div>

        </div>
      <button className={style.submit} type='submit'><p>Save your Day !!!</p></button>

      </form>
    </div>

  )
}

export default InsertDay