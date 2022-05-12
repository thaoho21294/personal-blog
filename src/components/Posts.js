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
    <div>
      <h3> All Posts</h3>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h4 className='title'>{post.title}</h4>
            <div className='content'>{post.content}</div>
            <Link to={'/post/edit/' + post._id}>edit</Link> |{' '}
            <a
              href='#'
              onClick={() => {
                deletePost(post._id)
              }}
            >
              delete
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Posts
