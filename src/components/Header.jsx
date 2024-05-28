import React from 'react'
import Navbar from './Navbar'
import { ScrollRestoration } from 'react-router-dom'

function Header() {
  return (
    <div className='border-red-500 border-2 p-4 h-40'>
        <ScrollRestoration getKey={(location,matches)=>{
          console.log(matches)
          return location.pathname
        }}/>
        <Navbar/> 
    </div>
  )
}

export default Header