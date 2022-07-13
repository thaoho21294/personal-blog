const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users')
const postRouter = require('./routes/posts')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, autoIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.use('/users', usersRouter)
app.use('/posts', postRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
