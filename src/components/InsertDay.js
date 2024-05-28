import {React,useState} from 'react'
import style from './CSS/InsertDay.module.css'
import axios from 'axios';
function InsertDay({ email }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  
  const today = new Date();

  // Get the day, month, and year components of today's date
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();

  // Format today's date as "DD/MM/YYYY"
  const formattedDate = `${day}/${month}/${year}`;
  const [date, setDate] = useState(formattedDate);

  const handleFileChange = (e) => {
    const fileList = e.target.files;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        // compressImage(event.target.result, file.name, (compressedImage,filename) => {
          
        //   setImages(prevImages => [...prevImages, { name: filename, url: compressedImage }]);
        // });

        setImages(prevImages => [...prevImages, { name: file.name, url: event.target.result }]);
        
      };

      reader.readAsDataURL(file);
    }
  };

  const compressImage = (imageData,filename, callback) => {
    const img = new Image();
    img.src = imageData;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      const maxWidth = 500;
      const maxHeight = 500;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob((blob) => {
        const compressedFile = new File([blob], 'compressed_image.jpg', {
          type: 'image/jpeg',
          lastModified: Date.now(),
        });
        callback(compressedFile,filename);
      }, 'image/jpeg', 0.3); // 0.7 is the image quality (between 0 and 1)
    };
  };
  
  const storeDiary = () => {
    const IMG = images.map(image => image.url);

    axios.post("https://daily-diary-backend.up.railway.app/memory/upload", { email, date, title, IMG, description })
    .then((response) => {
      console.log(response);
      setSuccessMessage("Form submitted successfully!");

      setTimeout(()=>{
        setSuccessMessage("")
      },1600)

      setTitle("");
      setDescription("");
      setImages([]);
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    storeDiary(); // Call the function to store diary
    e.clear();
  };

  return (
    <div className={style.container}>
     
      <form className={style.inputs} onSubmit={handleSubmit}>
        
          <p>Today Date</p>
          <div className={style.date}>
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
          <p>Title Your Day</p>
        <div className={style.title}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        
        <p>Insert Some More Details</p>
        <div className={style.description}>
          <textarea value={description} name="description" id="description" cols="70" rows="4" onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <p>Upload Images</p>
        <div className={style.IMAGE}>
          <div className={style.uploadA}>
            <label htmlFor="file-upload" className="file-upload-label">
              <img src="photo.png" height="40px" width="40px" alt="Upload" />
            </label>
            <input type="file" id="file-upload" className="file-upload-input" onChange={handleFileChange} multiple />
          </div>
          <div className={style.uploadedImages}>
            {images.map((image, index) => (
              <div key={index} className={style.imageCard}>
                {console.log(image.url)}
                <img src={(image.url)} alt={image.name} className={style.uploadedImage} />
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className={style.submit}><p>Save your Day !!!</p></button>
      </form>
      {successMessage && <div className={style.successMessage}>{successMessage}</div>}
    </div>
  );
}

export default InsertDay;
