import React from 'react'
import { amazon } from '../assets/images'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className='bg-a-d-gray text-primary'>
            <div className='padding-x py-5 justify-center items-center flex'>
                <Link to="/">
                    <img 
                    src={amazon} 
                    alt="" 
                    width={100}
                    height={100}/>
                </Link>
            </div>

            <ul className='flex flex-1 justify-center items-center gap-16 mb-4'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <Link to={item.href} className='font-montserrat leading-normal px-2 text-xs'>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='bg-a-black items-center justify-center flex flex-1 py-1 text-xs'>
                <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer