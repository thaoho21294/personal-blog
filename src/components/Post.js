import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

const Post = () => {
  const { id } = useParams()
  const isEditForm = id
  const [users, setUsers] = useState([])
  const [post, setPost] = useState({
    username: '',
    title: '',
    content: '',
  })

  useEffect(() => {
    if (isEditForm) {
      axios
        .get('http://localhost:5001/posts/' + id)
        .then((response) => {
          updatePost({
            username: response.data.username,
            title: response.data.title,
            content: response.data.content,
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    axios
      .get('http://localhost:5001/users/')
      .then((response) => {
        if (response.data.length > 0) {
          if (!isEditForm) {
            updatePost({ username: response.data[0].username })
          }
          setUsers(response.data.map((user) => user.username))
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const updatePost = (newPost) => {
    setPost((prevState) => ({
      ...newPost,
      prevState,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:5001/posts/add', post)
      .then((res) => console.log(res.data))

    window.location = '/'
  }

  return (
    <div>
      <h3>{isEditForm ? 'Edit Post' : 'Create Post'}</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>Username: </label>
          <select
            required
            className='form-control'
            value={post.username}
            onChange={(event) => updatePost({ username: event.target.value })}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-group'>
          <label>Title: </label>
          <input
            type='text'
            required
            className='form-control'
            value={post.title}
            onChange={(event) => updatePost({ title: event.target.value })}
          />
        </div>
        <div className='form-group'>
          <label>Content: </label>
          <input
            type='text'
            required
            className='form-control'
            value={post.content}
            onChange={(event) => updatePost({ content: event.target.value })}
          />
        </div>
        <div className='form-group'>
          <input
            type='submit'
            value='Create Post'
            className='btn btn-primary'
          />
        </div>
      </form>
    </div>
  )
}

export default Post
