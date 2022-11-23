import React from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
      
        <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>} />
          </Routes>
        <Footer/>
      
    </>
  )
}

export default App
