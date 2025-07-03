import React from 'react'
import './App.css'
import Navbar from './APIs/Navbar'
import Home from './pages/home'
import Sports from './pages/sports'
import News from './pages/News'
import Business from './pages/Business'

import { BrowserRouter, Routes, Route, } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/business' element={<Business />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
