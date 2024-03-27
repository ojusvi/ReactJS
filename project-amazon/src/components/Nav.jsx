import React from 'react'
import { amazon } from '../assets/images'
import { navLinks } from '../constants/index'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className='padding-x py-5  w-full bg-a-d-gray text-primary'>
        <nav className='flex justify-center items-center max-container'>
            <Link to="/" className='mt-4'>
                <img 
                    src={ amazon } 
                    alt="" 
                    width={100}
                    height={100}
                    className=''/>
            </Link>

            <ul className='flex flex-1 justify-center items-center gap-16'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className='font-montserrat leading-normal'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Nav