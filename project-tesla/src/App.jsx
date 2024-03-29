import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './pages/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './sections/Hero'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
