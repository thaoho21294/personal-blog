import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './scenes/Login'
import Home from './scenes/Home'
import Resume from './scenes/Resume/Resume'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home />} />
        <Route path='/logout' element={<Login />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
