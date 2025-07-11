const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')

router.post('/', async (req, res, next) => {
   try {
      const comment = await Comment.create({
         commenter: req.body.id,
         comment: req.body.comment,
      })

      res.status(201).json(comment)
   } catch (error) {
      console.error(error)
      next(error)
   }
})

//댓글수정
router.patch('/:id', async (req, res, next) => {
   try {
      const result = await Comment.update(
         {
            comment: req.body.comment,
         },
         {
            where: { id: req.params.id },
         },
      )
      console.log(result)
      //    result[0] : 수정된 레코드의 갯수 => 0이면 수정 안되었단 뜻
      if (result[0] === 0) {
         return res.status(404).json({ message: '댓글을 찾을 수 없습니다.' })
      }
      res.status(200).json({ message: '댓글이 수정되었습니다', result })
   } catch (error) {
      console.error(error)
      next(error)
   }
})

//댓글 삭제
router.delete('/:id', async (req, res, next) => {
   try {
      const result = await Comment.destroy({
         where: { id: req.params.id },
      })

      if (result === 0) {
         return res.status(404).json({ message: '댓글을 찾을 수 없습니다.' })
      }
      res.status(200).json({ message: '댓글이 삭제되었습니다.', result })
   } catch (error) {
      console.error(error)
      next(error)
   }
})

module.exports = router
