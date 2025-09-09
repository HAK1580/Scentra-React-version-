import React from 'react'
import './Search.css'
import { useState } from 'react'

const Search = ({search,setSearch,hero,setHero}) => {

  function handleCross(){
    
    setHero(false);
    setSearch(!search)

  }
  return (
    <>
 <div className="search-box-div">
  <div className="search-box">
 <input className='search-here' type="search" placeholder='Search'/>
 <div className="search-icons">

 <img width={35} src="/IMGS/icons/search.svg" alt="" />
 <img className='cross-img'  onClick={handleCross}  src="/IMGS/icons/cross.svg" alt="" />
 </div>


  </div>
     

 </div>
    </>
  )
}

export default Search