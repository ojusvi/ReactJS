import React, { useState } from 'react'
import Nav from '../components/Nav'
import { y } from '../assets/images'
import Hero from '../sections/Hero';

function Layout() {
  const [background, setBackground] = useState(y);

  return (
    <main className="flex flex-col min-h-screen">

        <div className="flex-1" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <Nav />
            <Hero setBackground={setBackground}/>
        </div>

    </main>
  )
}

export default Layout