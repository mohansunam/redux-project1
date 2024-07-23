import React from 'react'

const Search = ({img,year,type,title}) => {
  return (
    <div>
       <div className='w-[100%] h-[100%] shadow-xl'>
         <img src={img} alt="" />
         <h1 className='font-bold'>{type}</h1>
         <h1 className='font-bold'>{title}</h1>
         <h3>{year}</h3>    
       </div>

    </div>
   
  )
}

export default Search
