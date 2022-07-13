const express = require('express')
const app = express()
const router = express.Router()
// const mongoose = require('mongoose')

// require('dotenv').config()

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

// const uri = process.env.ATLAS_URI
// mongoose.connect(uri, { useNewUrlParser: true, autoIndex: true })

// const connection = mongoose.connection
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully')
// })

app.use(express.json({ extended: false }))

app.use('/product', router)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
