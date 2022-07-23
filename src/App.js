import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './scenes/Login'
import Home from './scenes/Home'

// TODO: explore why path array doesn't work

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home />} />
        <Route path='/logout' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
