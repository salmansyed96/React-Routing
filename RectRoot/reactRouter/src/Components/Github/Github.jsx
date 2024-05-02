import React from 'react'
import { useState, useEffect } from 'react'

const Github = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/salmansyed96')
    .then(Response => Response.json())
    .then(data =>{
      console.log(data)
      setData(data)
    })
  
    
  }, [])
  


  return (<>

    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
    <div className='mt-4'> UserName: {data.name}</div>
     <div className='mt-4'> Github followers: {data.followers}</div>
      <div className='mt-4'> Github following: {data.following}</div>
      
      
      
      <img src={data.avatar_url} alt='Picture' width={300}/>
    </div>
    </>)
}

export default Github
