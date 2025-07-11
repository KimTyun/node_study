const express = require('express')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000)

app.use((req, res, next) => {
   res.locals.appName = 'MyExpressApp'
   res.locals.timestamp = new Date().toISOString()
   next()
})

app.use((req, res, asdf) => {
   console.log(`App Name : ${res.locals.appName}`)
   console.log(`App Name : ${res.locals.timestamp}`)
   asdf()
})

app.get('/', (req, res) => {
   res.send(`<h1>${res.locals.appName}</h1>
                <p>${res.locals.timestamp}</p>`)
})

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
