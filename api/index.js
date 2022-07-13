const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const mongoose = require('mongoose')
// const usersRouter = require('./routes/users')
// const postRouter = require('./routes/posts')

require('dotenv').config()

router.get('/', async (req, res) => {
  try {
    res.json({
      status: 200,
      message: 'Get data has successfully',
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send('Server error')
  }
})

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, autoIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

// app.use(express.json({ extended: false }))

app.use('/product', router)
// app.use('/users', usersRouter)
// app.use('/posts', postRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
