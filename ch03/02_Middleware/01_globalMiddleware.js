const express = require('express')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000)

app.use((req, res, next) => {
   console.log(`전역 미들웨어 1실행 : ${req.method} & ${req.url}`)
   next() //response해주는 콜백함수로 이동
})
app.use((req, res, next) => {
   console.log('전역 미들웨어 2실행')
   next()
})

app.get('/', (req, res) => {
   console.log('홈페이지')
   res.send('홈페이지')
})

app.get('/about', (req, res) => {
   console.log('소개페이지')
   res.send('소개페이지')
})

app.listen(app.get('port'), () => {
   console.log(`서버 작동중`)
})
