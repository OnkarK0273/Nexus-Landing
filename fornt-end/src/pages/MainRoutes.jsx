import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

import ProjectsDetails from './Projects'
import Projectmap from './completedProjects/Projectmap'
import Projectmapongoing from './ongoingProjects/Projectmap'
import NexusHeights from './ongoingProjects/NexusHeights'
import NexusOne from './ongoingProjects/NexusOne'
import TheFirst from './completedProjects/TheFirst'
import TheHub from './completedProjects/TheHub'
import DrDongare from './ongoingProjects/DrDongare'
import Contactus from './Contact'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/completed' element={<Projectmap/>}/>
        <Route path='/ongoing' element={<Projectmapongoing/>}/>
        <Route path='/projectsDetails' element={<ProjectsDetails/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/NexusHeights' element={<NexusHeights/>} />
        <Route path='/NexusOne' element={<NexusOne/>} />
        <Route path='/TheFirst' element={<TheFirst/>} />
        <Route path='/TheHub' element={<TheHub/>} />
        <Route path='/DrDongare' element={<DrDongare/>} />
        <Route path='/Contact' element={<Contactus/>} />
    </Routes>
  )
}

export default MainRoutes