const getUser = () => {
  return localStorage.getItem('user')
}

const setUser = (username) => {
  localStorage.setItem('user', username)
}

const removeUser = () => {
  localStorage.removeItem('user')
}

export { getUser, setUser, removeUser }
