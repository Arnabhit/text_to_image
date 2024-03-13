import React from 'react'
import {useState,useRef} from 'react' 
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'
const ImageGenerator = () => {
  const [image_url,setimage_url]=useState("/");
  let inputRef=useRef(null);
  const imageGenerator=async()=>{
if(inputRef.current.value==="")
return 0;
const response=await fetch(
  "https://text-to-image7.p.rapidapi.com/",
  {
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      Authorization:
      "Bearer 1f1e8e3049mshbe2b5186741462cp14f74fjsn71961eebc51f",
      "User-Agent":"Chrome",
    },
    body:JSON.stringify({
      prompt:`${inputRef.current.value}`,
      n:1,
      size:"512x512",
    }),
  }
);
let data=await response.json();
let data_array=data.data;
setimage_url(data[0].url);
console.log(data);
  }
  return (
    <div className='ai-image-gen'>
        <div className="header">Ai image <span>Generator</span></div>
        <div className="img-loading">
            <div className="image"><img src={image_url==="/"?default_image:image_url} alt="first image"/></div>
        </div>
      
      <div className="search-box">
        <input type="text" ref={inputRef} className='search-input' placeholder='enter your serach' />
        <div className="btn" onClick={()=>{
          imageGenerator()
        }}>generate</div>
      </div>
    </div>
  )
}

export default ImageGenerator
