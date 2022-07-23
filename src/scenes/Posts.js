import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BLOG_API } from '../constants'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get(`${BLOG_API}/posts/`)
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const deletePost = (id) => {
    axios.delete(`${BLOG_API}/posts/` + id).then((response) => {
      console.log(response.data)
    })

    setPosts(posts.filter((el) => el._id !== id))
  }

  return (
    <div className='small-container'>
      {posts.map((post) => {
        return (
          <div key={post._id} style={{ marginTop: '2.37rem' }}>
            <Link to={`/posts/${post._id}`}>
              <h3 className='title'>{post.title}</h3>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
