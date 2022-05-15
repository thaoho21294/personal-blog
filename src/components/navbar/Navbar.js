import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg justify-content-center'>
        <ul className='navbar-nav'>
          <li className='navbar-item'>
            <Link to='/' className='nav-link'>
              ALL POSTS
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/post/create' className='nav-link'>
              CREATE POST
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
