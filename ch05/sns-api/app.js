const express = require('express')
require('dotenv').config()
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const multer = require('multer')
const morgan = require('morgan')
const { sequelize } = require('./models')
const cors = require('cors')
const passport = require('passport')

const indexRouter = require('./routes/')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const pageRouter = require('./routes/page')
const userRouter = require('./routes/user')
const passportConfig = require('./passport')

const app = express()
passportConfig()
app.set('PORT', process.env.PORT || 8002)

app.use(
   morgan('dev'),
   express.static(path.join(__dirname, 'uploads')),
   express.json(),
   express.urlencoded({ extended: false }),
   cookieParser(process.env.COOKIE_SECRET),
   session({
      resave: false,
      saveUninitialized: true,
      secret: process.env.COOKIE_SECRET,
      cookie: {
         //   maxAge 없으면 브라우저 꺼질때 삭제됨
         httpOnly: true,
         secure: false,
      },
   }),
   cors({
      origin: `http://localhost:5173`, //이 주소 request 허용
      credentials: true, //쿠키, 세션 등 인증정보 허용
   }),
   passport.initialize(), //초기화
   passport.session(), //passport와 생성해둔 세션과 연결
)

sequelize
   .sync({ force: false })
   .then(() => {
      console.log('연결성공')
   })
   .catch((err) => {
      console.error(err)
   })

app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/post', postRouter)
app.use('/page', pageRouter)
app.use('/user', userRouter)

app.use((req, res, next) => {
   const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`) //에러객체 생성
   error.status = 404 // 404 상태코드 설정
   next(error) //에러 미들웨어로 전달
})

app.use((err, req, res, next) => {
   console.error(err)

   const statusCode = err.status || 500
   const errorMessage = err.message || '서버 내부 오류'
   res.status(statusCode).json({
      success: false,
      message: errorMessage,
      error: err,
   })
})

// app.options('*', cors)
app.listen(app.get('PORT'), () => {
   console.log(`http://localhost:${app.get('PORT')} 에서 대기중`)
})
