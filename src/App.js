import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './scenes/Login'
import Home from './scenes/Home'
import { UserInfo } from './contexts'

// TODO: explore why path array doesn't work

function App() {
  const [user, setUser] = useState()

  return (
    <UserInfo.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </UserInfo.Provider>
  )
}

export default App
