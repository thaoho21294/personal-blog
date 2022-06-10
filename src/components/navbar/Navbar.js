import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='small-container'>
      <ol>
        <li>
          <Link to='/'>all posts</Link>
        </li>
        <li>
          <Link to='/post/create'>create post</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
      </ol>
    </nav>
  )
}

export default Navbar
