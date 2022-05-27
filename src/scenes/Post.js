import React, { useState, useEffect } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import axios from 'axios'
import { BLOG_API } from '../constants'
import Editor from 'components/editor/Editor'

const Post = () => {
  const { id } = useParams()
  const isEditing = useMatch('post/edit/:id')
  const isReadOnly = !isEditing && id
  const [content, setContent] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (id) {
      axios
        .get(`${BLOG_API}/posts/${id}`)
        .then((response) => {
          setContent(response.data.content)
          setTitle(response.data.title)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    if (id) {
      axios
        .post(`${BLOG_API}/posts/update/${id}`, {
          title,
          content,
          username: 'thaoho',
        })
        .then((res) => console.log(res.data))
    } else {
      axios
        .post(`${BLOG_API}/posts/add`, {
          title,
          content,
          username: 'thaoho',
        })
        .then((res) => console.log(res.data))
    }

    // window.location = '/'
  }

  return (
    <div>
      <h3>{isEditing ? 'Edit Post' : 'Create Post'}</h3>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            placeholder='Title'
            type='text'
            required
            className='form-control'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <Editor
          document={content}
          onChange={(content) => setContent(content)}
          readOnly={isReadOnly}
        />
        {!isReadOnly && (
          <div className='form-group'>
            <input type='submit' value='Submit' className='btn btn-primary' />
          </div>
        )}
      </form>
    </div>
  )
}

export default Post
