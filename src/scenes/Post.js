import React, { useState, useEffect } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import axios from 'axios'
import { BLOG_API } from '../constants'
import Editor from 'components/editor/Editor'
import { Button, Input } from '@mui/material'

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

  const onSubmit = () => {
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
  }

  return (
    <div>
      <div style={{ marginTop: '20px' }}></div>
      <Input
        placeholder='Title'
        value={title}
        fullWidth
        required
        onChange={(event) => setTitle(event.target.value)}
      />
      <div style={{ marginTop: '20px' }}></div>
      <Editor
        document={content}
        onChange={(content) => setContent(content)}
        readOnly={isReadOnly}
      />
      {!isReadOnly && (
        <Button variant='contained' onClick={onSubmit}>
          {isEditing ? 'Update' : 'Create'}
        </Button>
      )}
    </div>
  )
}

export default Post
