import React, { useEffect } from 'react'
import axios from 'axios'
import { useMatch, useNavigate } from 'react-router-dom'
import { TextField, Button } from '@mui/material'
import { BLOG_API } from '../../constants'
import { getUser, removeUser, setUser } from '../../contexts'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const isLogout = useMatch('/logout')

  useEffect(() => {
    if (isLogout) {
      removeUser()
      navigate('/')
    }

    if (getUser()) {
      navigate('/')
    }
  }, [])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    axios
      .post(`${BLOG_API}/users/login`, {
        username: evt.target.username.value,
        password: evt.target.password.value,
      })
      .then((response) => {
        setUser(response.data.username)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <TextField
          id='username'
          label='Username'
          variant='standard'
          color='success'
          required
        />
        <TextField
          id='password'
          label='Password'
          type='password'
          variant='standard'
          color='success'
          required
        />
        <Button
          type='submit'
          variant='contained'
          className='form__custom-button'
          color='success'
        >
          Log in
        </Button>
      </form>
    </div>
  )
}

export default Login
