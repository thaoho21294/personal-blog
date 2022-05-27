import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from 'components/navbar/Navbar'
import Posts from './scenes/Posts'
import Post from './scenes/Post'

// TODO: explore why path array doesn't work

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <h3 className='brand'>Thao Ho Blog</h3>
        <Navbar />
        <Routes>
          <Route path='/post/:id' element={<Post />} />
          <Route path='/post/create' element={<Post />} />
          <Route path='/post/edit/:id' element={<Post />} />
          <Route path='/' element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
