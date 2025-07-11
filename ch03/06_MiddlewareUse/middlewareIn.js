const express = require('express')
require('dotenv').config()

const app = express()

app.set('port', process.env.PORT || 3000)

const logMiddleware = (req, res, next) => {
   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
   next()
}
const authMiddleware = (req, res, next) => {
   const token = '12345'
   if (token === '12345') {
      console.log('인증성공')
      next()
   }
}

app.use((req, res, next) => {
   console.log(req.path)
   if (req.path === '/secure') {
      authMiddleware(req, res, next)
   } else {
      next()
   }
})

app.use(logMiddleware)

app.get('/', (req, res) => {
   res.send('환영합니다.')
})

app.get('/secure', (req, res) => {
   res.send('secure route에 접근했습니다.')
})

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
