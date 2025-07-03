import React from 'react'
import './App.css'
import Navbar from './APIs/Navbar'
import Home from './pages/Home'
import Sports from './pages/sports'
import News from './pages/news3'
import Business from './pages/Business'

import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news3' element={<News />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/Business' element={<Business />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
