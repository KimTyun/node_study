const express = require('express')
const User = require('../models/user')
const router = express.Router()
const Comment = require('../models/comment')
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

router.get('/:id', async (req, res, next) => {
   try {
      const user = await User.findOne({
         where: {
            id: req.params.id,
         },
         attributes: ['name', 'age'],
      })

      res.status(200).json(user)
   } catch (error) {
      console.error(error)
      next(error)
   }
})

//모든 댓글 가져오기
router.get('/:id/comments', async (req, res, next) => {
   try {
      // const comments = await Comment.findAll({
      //    include: {
      //       model: User,
      //       where: { id: req.params.id },
      //    },
      // })

      const comments = await User.findAll({
         where: { id: req.params.id },
         include: {
            model: Comment,
         },
      })

      res.status(200).json(comments)
   } catch (error) {
      console.error(error)
      next(error)
   }
})

router.post('/', async (req, res, next) => {
   try {
      console.log(req.body)
      const user = await User.create({
         name: req.body.name,
         age: req.body.age,
         married: req.body.married,
         comment: req.body.comment,
      })
      console.log(user)
      res.status(201).json(user)
   } catch (error) {
      console.error(error)
      next(error)
   }
})

module.exports = router
