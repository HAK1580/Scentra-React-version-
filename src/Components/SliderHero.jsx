import React from 'react'
import './SliderHero.css'
import { useState,useEffect } from 'react'

const SliderHero = ({search,setSearch}) => {


  
 const imgs=[
    "/Scentra-React-version-/IMGS/Banners/1.jpg",
    "/Scentra-React-version-/IMGS/Banners/2.jpg",
    "/Scentra-React-version-/IMGS/Banners/4.jpg",
  ]
 
  const[current,setCurrent]=useState(0)
  function nextImg(){
    setCurrent((prev)=>prev===imgs.length-1?0:prev+1)
  }

  useEffect(()=>{
   const timer =setTimeout(nextImg,10000);

   return function cleanup(){
      clearTimeout(timer)
   }



  },[current,imgs.length])
  
  return (
    <div >
    <div className="hero">
    <div className="slider">
        {imgs.map((image,i)=>  <img key={i} src={image} alt="" className={`${i===current?"active":""}`}/> )}
      
    </div>
    <div className="herobtns">
      <button className='herobtn'  >Buy Scents</button>

    </div>
  
    </div>
    

    <div className="headline-2">
      <div className="headlinetxt2">
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
        <h3>Scentra</h3>
      </div>



    </div>
    
  
  

    </div>
  )
}

export default SliderHero