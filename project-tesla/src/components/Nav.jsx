import React from 'react'
import { logo } from '../assets/images'

function Nav() {
  return (
    <header className='padding-x py-5 w-full'>
        <nav className='flex max-container'>
            <a href="/" className='mt-4'>
                <img 
                    src={logo} 
                    alt="" 
                    width={100}
                    height={100}/>
            </a>
        </nav>
    </header>
  )
}

export default Nav