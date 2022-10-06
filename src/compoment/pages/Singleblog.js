import React from 'react'
import { useParams,useLocation } from 'react-router-dom'


const Singleblog = () => {
   
    const {title}=useParams();
    const location=useLocation()
   


    
  return (
    <div>
       <h1>{title}</h1>
       <p>{location.state.body}</p>
    </div>
  )
}

export default Singleblog
