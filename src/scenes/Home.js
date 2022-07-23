import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from 'components/navbar/Navbar'
import Posts from './Posts'
import Post from './Post'
import About from './About/About'
import './Home.scss'

// TODO: explore why path array doesn't work

function Home() {
  return (
    <div className='home'>
      <header>
        <h1 className='brand'>Thao Ho Blog</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path='posts' element={<Posts />} />
        <Route path='posts/:id' element={<Post />} />
        <Route path='posts/create' element={<Post />} />
        <Route path='/about' element={<About />} />
        <Route index element={<Posts />} />
      </Routes>
    </div>
  )
}

export default Home
