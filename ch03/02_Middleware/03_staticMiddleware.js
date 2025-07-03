const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000)

console.log(__dirname)
console.log(path.join(__dirname, 'public'))
app.get('/', (req, res) => {
   // html을 response
   res.sendFile(path.join(__dirname, '/submit.html'))
})

app.use('/image', express.static(path.join(__dirname, 'public')))

app.get('/about', (req, res) => {
   res.send('소개 페이지')
})

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
