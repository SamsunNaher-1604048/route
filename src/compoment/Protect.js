import React from 'react'
import { Navigate } from 'react-router-dom'

const Protect = ({Login,children}) => {
  if(!Login){
    return <Navigate  to='/' replace/>
  }else{
    return children;
  }
}

export default Protect
