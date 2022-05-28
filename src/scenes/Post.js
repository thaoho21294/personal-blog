import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BLOG_API } from '../constants'
import Editor from 'components/editor/Editor'
import { Button } from '@mui/material'
import { getTitle } from 'utils'

const Post = () => {
  const { id } = useParams()
  const [editing, setEditing] = useState(false)
  const [content, setContent] = useState([])
  const [forceUpdate, setForceUpdate] = useState(false)
  const [originalContent, setOriginalContent] = useState(false)

  useEffect(() => {
    if (id) {
      axios
        .get(`${BLOG_API}/posts/${id}`)
        .then((response) => {
          setOriginalContent(response.data.content)
          setContent(response.data.content)
          setForceUpdate(true)
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
        {!editing && (
          <Button
            onClick={() => {
              setEditing(true)
              setForceUpdate(false)
            }}
          >
            Edit
          </Button>
        )}
        {editing && (
          <>
            <Button
              variant='contained'
              onClick={() => {
                onSubmit()
                setEditing(false)
              }}
            >
              Publish
            </Button>
            <span style={{ marginLeft: '4px' }}></span>
            <Button
              variant='outlined'
              onClick={() => {
                setContent(originalContent)
                setForceUpdate(true)
                setEditing(false)
              }}
            >
              Revert
            </Button>
          </>
        )}
      </div>
      <Editor
        content={content}
        onChange={(content) => setContent(content)}
        readOnly={!editing}
        forceUpdate={forceUpdate}
      />
    </div>
  )
}

export default Post
