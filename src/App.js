import React from 'react'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Posts from './components/Posts'
import Post from './components/Post'

// TODO: expore why path array doesn't work

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/post/create' element={<Post />} />
        <Route path='/post/edit/:id' element={<Post />} />
        <Route path='/' exact element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
