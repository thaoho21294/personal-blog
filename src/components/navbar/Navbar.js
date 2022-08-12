import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = ({ user }) => {
  return (
    <nav className='small-container'>
      <ol>
        <li>
          <Link to='/'>all posts</Link>
        </li>
        {user && (
          <li>
            <Link to='/posts/create'>create post</Link>
          </li>
        )}
        <li>
          <Link to='/about'>about</Link>
        </li>
      </ol>
    </nav>
  )
}

export default Navbar
