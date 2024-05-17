import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Page() {
  return (
    <div className='scroll-smooth flex flex-col w-screen h-screen'>  
        <Header/>    
        <Outlet/>
    </div>
  )
}

export default Page