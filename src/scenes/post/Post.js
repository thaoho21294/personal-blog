import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BLOG_API } from '../../constants'
import Editor from 'components/editor/Editor'
import { Button } from '@mui/material'
import { getTitle } from 'utils'
import { getUser } from '../../contexts'

const defaultContent = [
  {
    type: 'h1',
    align: 'left',
    children: [{ text: '' }],
  },
]

const Post = () => {
  const { id } = useParams()
  const [editing, setEditing] = useState(false)
  const [content, setContent] = useState([])
  const [forceUpdate, setForceUpdate] = useState(0)
  const [originalContent, setOriginalContent] = useState()

  useEffect(() => {
    if (!id) {
      setContent(defaultContent)
      setEditing(true)
      setForceUpdate((v) => v + 1)
    }
  }, [id])

  useEffect(() => {
    if (id) {
      axios
        .get(`${BLOG_API}/posts/${id}`)
        .then((response) => {
          setOriginalContent(response.data.content)
          setContent(response.data.content)
          setForceUpdate((v) => v + 1)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [])

  const user = getUser()

  const onSubmit = () => {
    const title = getTitle(content)
    if (id) {
      axios
        .post(`${BLOG_API}/posts/update/${id}`, {
          title,
          content,
          username: user.username,
        })
        .then((res) => console.log(res.data))
    } else {
      axios
        .post(`${BLOG_API}/posts/add`, {
          title,
          content,
          username: user.username,
        })
        .then((res) => console.log(res.data))
    }
  }

  return (
    <div className='small-container'>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        {!editing && user && (
          <Button
            onClick={() => {
              setEditing(true)
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
            {id && (
              <Button
                variant='outlined'
                onClick={() => {
                  setContent(originalContent)
                  setForceUpdate((v) => v + 1)
                  setEditing(false)
                }}
              >
                Cancel
              </Button>
            )}
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
