import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './contact'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
  )
}

export default MainRoutes