import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BLOG_API } from '../../constants'

const ViewPost = () => {
  const { id } = useParams()

  const [post, setPost] = useState({
    title: '',
    content: '',
  })

  useEffect(() => {
    axios
      .get(`${BLOG_API}/posts/` + id)
      .then((response) => {
        setPost({
          title: response.data.title,
          content: response.data.content,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <div className='view-post-wrapper'>
      <h2 className='title'>{post.title}</h2>
      <div className='content'>{post.content}</div>
    </div>
  )
}
export default ViewPost
