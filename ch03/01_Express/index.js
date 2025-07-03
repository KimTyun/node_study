const express = require('express')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000) //포트번호 = 문

app.get('/', (req, res) => {
   res.send('안녕 123')
})

// post로 오면 이거 실행
// app.post('/', (req, res) => {
//    res.send('안녕 어쩌구2')
// })

app.listen(app.get('port'), () => {
   console.log(`서버가 작동중입니다. http://localhost:${app.get('port')}`)
})

app.get('/test', (req, res) => {
   res.send('안녕 어쩌구test')
})

app.listen(app.get('port'), () => {
   console.log(`서버가 작동중입니다. http://localhost:${app.get('port')}`)
})
