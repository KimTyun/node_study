const express = require('express')
require('dotenv').config()
const path = require('path')
const app = express()
const morgan = require('morgan')
const { sequelize } = require('./models')
app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'), express.static(path.join(__dirname, 'public')), express.json(), express.urlencoded({ extended: true }))

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const commentsRouter = require('./routes/comments')

sequelize
   .sync({ force: false })
   .then(() => {
      console.log('데이터베이스 연결 성공')
   })
   .catch((err) => {
      console.error(`데이터베이스 연결 실패 : ${err}`)
   })

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/comments', commentsRouter)

//요청 경로가 잘못되었을 때
app.use((req, res, next) => {
   const error = new Error(`${req.method} ${req.url}라우터가 없습니다.`)
   error.status = 404
   next(error)
})
//에러 발생했을 때
app.use((err, req, res, next) => {
   const status = err.state || 500
   const message = err.message || '서버에러'

   res.status(status).send(`
        <h1>Error ${status}</h1>
        <p>${message}</p>
        `)
})

app.listen(app.get('port'), () => {
   console.log(`서버 작동중 http://localhost:${app.get('port')}`)
})
