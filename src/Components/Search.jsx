import React from 'react'
import './Search.css'
import { useState } from 'react'

const Search = ({search,setSearch,hero,setHero}) => {
  
  function handleKeyDown(e){
if(e.key==="Enter"){
  alert("add products first!");

}
  }


  function handleClick(){
    alert("add products first!");
  }

  function handleCross(){
    
    setHero(!hero);
    setSearch(!search)

  }
  return (
    <>
 <div className="search-box-div">
  <div className="search-box">
 <input onKeyDown={handleKeyDown} className='search-here' type="search" placeholder='Search'/>
 <div className="search-icons">

 <img onClick={handleClick} width={35} src="/IMGS/icons/search.svg" alt="" />
 <img className='cross-img'  onClick={handleCross}  src="/IMGS/icons/cross.svg" alt="" />
 </div>


  </div>
     

 </div>
    </>
  )
}

export default Search