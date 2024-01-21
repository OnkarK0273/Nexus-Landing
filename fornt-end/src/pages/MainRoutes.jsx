import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

import ProjectsDetails from './Projects'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
      
        <Route path='/projectsDetails' element={<ProjectsDetails/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
  )
}

export default MainRoutes