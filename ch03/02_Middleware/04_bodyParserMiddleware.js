const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(express.json())

//폼태그에서 입력한 데이터를 인코딩해서 전송해줌
app.use(express.urlencoded({ extended: true })) //URL-encoded 요청 처리

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/submit.html'))
})

app.post('/submit', (req, res) => {
   // request, response 할때는 header + body 형태로 데이터가 전송된다.

   console.log(req.body) // form 태그에서 입력한 데이터가 들어있음
   res.send('데이터 수신 완료!')
})

app.listen(app.get('port'), () => {
   console.log('서버가 작동 중 입니다.')
})
