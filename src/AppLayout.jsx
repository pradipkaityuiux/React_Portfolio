import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout({children}) {
  return (
    <div className='main'>
        {children}
    </div>
  )
}

export default AppLayout