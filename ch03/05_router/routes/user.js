const express = require('express')
const router = express.Router() //라우터를 가져온다.

// /user
router.get('/', (req, res) => {
   res.send('Hello, User')
})

// /user/test
router.get('/test', (req, res) => {
   res.send('Hello, User test')
})

router
   .route('/cate/abc')
   .get((req, res) => {
      res.send('GET/cate/abc')
   })
   .get((req, res) => {
      res.send('POST/cate/abc')
   })

module.exports = router
