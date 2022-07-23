import React from 'react'
import { Link } from 'react-router-dom'
import { getUser } from '../../contexts'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='small-container'>
      <ol>
        <li>
          <Link to='/'>all posts</Link>
        </li>
        {getUser() && (
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
