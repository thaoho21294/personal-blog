import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BLOG_API } from '../constants'
import Editor from 'components/editor/Editor'

import axios from 'axios'

const ExampleDocument = [
  {
    type: 'h1',
    children: [{ text: 'Heading 1' }],
  },
  {
    type: 'h2',
    children: [{ text: 'Heading 2' }],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Hello World! This is my paragraph inside a sample document.' },
      { text: 'Bold text.', bold: true, code: true },
      { text: 'Italic text.', italic: true },
      { text: 'Bold and underlined text.', bold: true, underline: true },
      { text: 'variableFoo', code: true },
    ],
  },
]

const Post = () => {
  const { id } = useParams()
  const isEditForm = id
  const [users, setUsers] = useState([])
  const [post, setPost] = useState({
    username: '',
    title: '',
    content: '',
  })

  const [document, updateDocument] = useState(ExampleDocument)

  useEffect(() => {
    if (isEditForm) {
      axios
        .get(`${BLOG_API}/posts/` + id)
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
      .get(`${BLOG_API}/users/`)
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
      .post(`${BLOG_API}/posts/add`, post)
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
        <Editor
          document={document}
          onChange={(document) => updateDocument(document)}
        />
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
