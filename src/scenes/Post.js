import React, { useState, useEffect } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import axios from 'axios'
import { BLOG_API } from '../constants'
import Editor from 'components/editor/Editor'
import { Button } from '@mui/material'
import { getTitle } from 'utils'

const Post = () => {
  const { id } = useParams()
  const isEditing = useMatch('post/edit/:id')
  const isReadOnly = !isEditing && id
  const [content, setContent] = useState([])
  const [receivedData, setReceivedData] = useState(false)

  useEffect(() => {
    if (id) {
      axios
        .get(`${BLOG_API}/posts/${id}`)
        .then((response) => {
          setContent(response.data.content)
          setReceivedData(true)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [])

  const onSubmit = () => {
    const title = getTitle(content)
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
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        {!isReadOnly && (
          <Button variant='contained' onClick={onSubmit}>
            {isEditing ? 'Update' : 'Create'}
          </Button>
        )}
      </div>
      <Editor
        content={content}
        onChange={(content) => setContent(content)}
        readOnly={isReadOnly}
        receivedData={receivedData}
      />
    </div>
  )
}

export default Post
