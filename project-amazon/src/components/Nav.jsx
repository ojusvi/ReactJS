import React from 'react'
import { amazon } from '../assets/images'
import { navLinks } from '../constants/index'
import { Link } from "react-router-dom";
import { SheetDemo } from './SheetDemo';
import { InputDemo } from './Demo/InputDemo';

function Nav() {
  return (
    <>
    <header className='padding-x py-3 w-full bg-adgray text-white'>
        <nav className='flex justify-center items-center max-container'>
            <Link to="/" className='mt-3'>
                <img 
                    src={ amazon } 
                    alt="" 
                    width={100}
                    height={100}
                    className='px-2 ml-5'
                />
            </Link>
            <div className='mx-auto w-[40%] max-sm:w-[50%]'>
                <InputDemo></InputDemo>
            </div>
        </nav>
    </header>
    <div className='bg-acharcol text-white py-2 font-bold'>
        <ul className='flex flex-1 items-center gap-16'>
            <div>
            <SheetDemo></SheetDemo>
            </div>
            {navLinks.map((item) => (
                <li key={item.label} className='max-sm:hidden'>
                    <a href={item.href} className='font-montserrat leading-normal text-sm'>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default Nav