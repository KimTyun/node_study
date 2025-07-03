const express = require('express')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
   res.send('환영합니다.')
})

app.get('/error', (req, res, next) => {
   const err = new Error('에러발생')
   err.status = 500
   next(err)
})

app.use((err, req, res, next) => {
   console.log('ErrorL ', err.message)
   res.status(err.status).json({
      error: {
         message: err.message,
      },
   })
})

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
