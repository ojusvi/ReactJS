import React from 'react'
import { amazon } from '../assets/images'
import { location } from '../assets/images';
import { INflag } from '../assets/images';
import { navLinks } from '../constants/index'
import { Link } from "react-router-dom";
import { SheetDemo } from './SheetDemo';
import { InputDemo } from './Demo/InputDemo';

function Nav() {
  return (
    <>
    <header className='padding-x py-3 w-full bg-adgray text-white'>
        <nav className='flex items-center max-container'>
            <Link to="/" className='mt-3'>
                <img 
                    src={ amazon } 
                    alt="" 
                    width={100}
                    height={100}
                    className='px-2 ml-5'
                />
            </Link>
            <img 
                src={location} 
                alt="" 
                width={12} 
                height={12}
                className='ml-20 mt-3.5'
            />

            <div className='ml-3 text-sm'> 
                Hello User, <br />
                <span className='font-bold'>Select Your Address</span>
            </div>
            <div className='mx-16 w-[50%] max-sm:w-[50%]'>
                <InputDemo></InputDemo>
            </div>

            <img src={INflag} alt="" width={40} height={40} className='-mx-10'/>
            <span className='mx-5'>EN</span>

            <div className='text-xs'> 
                Hello, Sign In <br />
                <span className='font-bold text-sm'>Account & Lists</span>
            </div>

            <div className='ml-10 text-xs'> 
                Returns<br />
                <span className='font-bold text-sm'>& Orders</span>
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