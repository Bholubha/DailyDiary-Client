import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const Insertion = ({username})=> {


  const [title, setTitle] = useState("");
  const [description, setDi] = useState("");

  console.log(username)
  


  const createPost = ()=>{
    
    const IMG = document.getElementById("img");
   
    const file = IMG.files[0];
    const reader = new FileReader();
    
    var image;
    reader.addEventListener("load", ()=>{
        image = reader.result;

       console.log(image);

       axios.post("https://memory-server-pi.vercel.app/memory/upload",{username,title,description,image})
       .then((response) => {
         
         console.log("memory upload successfully");
         
         setDi("");
         setTitle("");
         
         
       })
       .catch(function (error) {
         console.log(error);
    });
    
    });

    reader.readAsDataURL(file);

   
 
  }


  return (
    <>
     <div className='absolute top-40 w-full'>

     <div className='relative flex justify-center w-full '>

     
     <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-9 py-9">

     <form >

     <label>Give title to your memory</label> 

      <input  value={title} className="shadow appearance-none border rounded w-full py-2 px-3 my-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder=""/>

       <label>Descript your memory with your feelings</label> 

      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => {setDi(e.target.value)}} type="text" value={description} placeholder=""/>

    <input type="file" id="img" name="img" onChange={(e)=>{}} accept="image/*"/>

   <button type="button" onClick={createPost} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  my-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

  </form>
</div>


       
 
 
 </div>
 </div>
  </>
  );
}

export default Insertion