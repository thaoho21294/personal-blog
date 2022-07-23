import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { TextField, Button } from '@mui/material'
import { BLOG_API } from '../constants'
import { UserInfo } from '../contexts'
import './Login.scss'

const Login = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserInfo)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    axios
      .post(`${BLOG_API}/users/login`, {
        username: evt.target.username.value,
        password: evt.target.password.value,
      })
      .then((response) => {
        setUser(response.data)
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
