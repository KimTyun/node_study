const express = require('express')
const User = require('../models/user')
const Comment = require('../models/comment')
const router = express.Router()
router.get('/', async (req, res, next) => {
   try {
      const users = await User.findAll()
      console.log('users:', users)
      res.status(200).json(users)
   } catch (err) {
      console.error(err)
      next(err)
   }
})

module.exports = router
