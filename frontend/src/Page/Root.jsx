import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Group/Header'
export default function Root() {
  return (
    <div>
        <div className='w-full py-4 hidden md:block'>
        <Header/>
      </div>
      <Outlet/>
      
    </div>
  )
}
