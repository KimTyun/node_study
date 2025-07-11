const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use('/', express.static(path.join(__dirname, 'public'))) //정적 미들웨어

try {
   fs.readdirSync('uploads') //uploads 폴더가 있는지 확인
} catch (error) {
   console.log('업로드 폴더가 없음')
   fs.mkdirSync('uploads')
}

const upload = multer({
   storage: multer.diskStorage({
      //업로드 파일 저장 경로
      destination(req, file, done) {
         done(null, 'uploads/') //uploads 폴더에 저장
      },
      //저장할 파일 이름 설정
      filename(req, file, done) {
         const ext = path.extname(file.originalname) //파일 확장자 추출
         done(null, path.basename(file.originalname, ext) + Date.now() + ext) //어떤 파일명으로 저장할지
      },
   }),
   limits: { fieldSize: 5 * 1024 * 1024 }, //업로드 파일 크기 제한 (5mb)
})

app.get('/upload', (req, res) => {
   res.sendFile(path.join(__dirname, 'multipart.html'))
})

app.post('/upload', upload.array('many'), (req, res) => {
   //하나의 파일
   console.log(req.files)
   res.send('ok')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false })) //body-parser 미들웨어

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
