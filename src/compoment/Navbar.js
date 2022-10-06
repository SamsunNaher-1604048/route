import React from 'react'
import {NavLink } from 'react-router-dom'
import '../style.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink className='link' to='/'>Home</NavLink><br/>
            <NavLink className='link' to='/blog'>Blog</NavLink><br/>
            <NavLink className='link'to ='/contact'>Contact</NavLink><br/>
            <NavLink className='link' to='/Addblog'>Addblog</NavLink><br/>
        </nav>
    </div>
  )
}

export default Navbar
