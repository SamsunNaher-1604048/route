import React from 'react'
import { useNavigate } from 'react-router-dom'




const Contact = () => {
    const navigate=useNavigate()
    const Submit=()=>{
        navigate('/')
    }


  return (
    <div>
        <h1>Contact page</h1>
        <p>this is contact page</p>
        <button onClick={Submit}>Go to Home</button>
      
    </div>
  )
}

export default Contact
