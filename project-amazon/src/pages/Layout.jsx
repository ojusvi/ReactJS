import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Layout() {
  return (
    <main className="flex flex-col min-h-screen">
        <Nav />
        <div className='flex-1 flex'>
            <Outlet />
        </div>
        <Footer />
    </main>
  )
}

export default Layout