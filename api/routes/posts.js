const router = require('express').Router()
let Post = require('../models/post.model')

router.route('/').get((req, res) => {
  Post.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/add').post((req, res) => {
  const username = req.body.username
  const title = req.body.title
  const content = req.body.content

  const newPost = new Post({ username, title, content })

  newPost
    .save()
    .then(() => res.json('Post added!'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted!'))
    .catch((err) => res.status(400).json('Error:' + err))
})

router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post.username = req.body.username
      post.content = req.body.content
      post.title = req.body.title

      post
        .save()
        .then(() => res.json('Post updated!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error:' + err))
})

module.exports = router
