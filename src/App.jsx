import React from 'react'
import './App.css'
import Navbar from './APIs/Navbar'
import Home from './assets/Home'
import Sports from './assets/Sports'
import News from './assets/news3'
import Business from './assets/Business'

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
