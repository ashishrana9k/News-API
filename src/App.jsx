import React from 'react'
import './App.css'
import Navbar from './APIs/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import Business from './pages/Business'
import Update from './pages/Update'

import { BrowserRouter, Routes, Route, } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/Update' element={<Update />} />
          <Route path='/Business' element={<Business />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
