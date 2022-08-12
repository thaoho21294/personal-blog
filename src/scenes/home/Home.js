import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Posts from 'scenes/posts'
import Post from 'scenes/post'
import About from 'scenes/about'
import './Home.scss'
import Header from 'components/header'

// TODO: explore why path array doesn't work

function Home() {
  const isCreating = useMatch('/posts/create')

  return (
    <div className='home'>
      <Header />
      <Routes>
        <Route path='posts' element={<Posts />} />
        <Route path='posts/:id' element={<Post />} />
        <Route path='posts/create' element={<Post />} />
        <Route path='/about' element={<About />} />
        <Route index element={<Posts />} />
      </Routes>
      {!isCreating && (
        <footer className='small-container'>
          <a
            href='https://www.linkedin.com/in/thao-ho-b8024690'
            className='link-group'
          >
            <LinkedInIcon /> Linkedin
          </a>
          <a href='https://github.com/thaoho21294' className='link-group'>
            <GitHubIcon /> Github
          </a>
        </footer>
      )}
    </div>
  )
}

export default Home
