import React from 'react'
import Header from '../tempalte/Header'
import { Route, Routes } from 'react-router-dom'
import About from '../tempalte/About'
import Enquiry from '../tempalte/Enquiry'

import OurService from '../tempalte/OurService'
import Login from '../includes/Login'

function VisitorLayout() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/enquiry' element={<Enquiry/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/our-service' element={<OurService/>}/>
        </Routes>
    </div>
  )
}

export default VisitorLayout