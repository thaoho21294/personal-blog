import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Thao's Blog</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">All Posts</Link>
            </li>
            <li className="navbar-item">
              <Link to="/post/create" className="nav-link">Create Post</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}