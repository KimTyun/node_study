const express = require('express')
require('dotenv').config()
const morgan = require('morgan')

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))

const indexRouter = require('./routes')
const userRouter = require('./routes/user')

app.use('/', indexRouter)
app.use('/user', userRouter)

app.listen(app.get('port'), () => {
   console.log(`서버가 작동중 입니다. http://localhost:${app.get('port')}`)
})
