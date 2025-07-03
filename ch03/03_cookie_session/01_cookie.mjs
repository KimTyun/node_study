import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cookieParser('my-secret-key'))

app.get('/set-cookie', (req, res) => {
   res.cookie('age', '25', { signed: false, maxAge: 1000 * 60 })
   res.cookie('user', 'alice', { signed: true, maxAge: 1000 * 60 })
   console.log('셋쿠키')
   res.send('설정됨')
})

app.get('/get-cookie', (req, res) => {
   console.log('쿠키 : ', req.cookies)
   console.log('쿠키 : ', req.signedCookies)
   res.send(`쿠키 : ${req.cookies.age}, 서명된 쿠키 : ${req.signedCookies.user}`)
})

app.get('/clear-cookie', (req, res) => {
   res.clearCookie('age')
   res.clearCookie('user')
   res.send('쿠키가 삭제되었습니다.')
})

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
