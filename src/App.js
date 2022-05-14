import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Post from './components/Post'
import ViewPost from './components/view-post/ViewPost'

// TODO: expore why path array doesn't work

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/post/:id' element={<ViewPost />} />
          <Route path='/post/create' element={<Post />} />
          <Route path='/post/edit/:id' element={<Post />} />
          <Route path='/' element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
