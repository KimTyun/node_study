const express = require('express')
const session = require('express-session')
require('dotenv').config()

const app = express()
app.set('port', process.env.PORT || 3000)

// 세션 설정
app.use(
   session({
      name: 'my-session-cookie', //세션 id를 저장하는 쿠키의 이름
      secret: 'your-secret-key', // 세션 암호화에 사용하는 키
      resave: false, // 세션 데이터가 바뀌지 않아도 다시 저장할지 여부
      saveUninitialized: false, //초기화되지 않은 세션을 저장할지 여부
      cookie: {
         maxAge: 1000 * 60 * 5,
         secure: false,
      },
   }),
)

app.get('/set-session', (req, res) => {
   //세션 객체는 서버에 저장되며 세션id는 쿠키에 저장된다
   req.session.username = '가나' // username:key, 가나:value
   req.session.role = 'admin'
   res.send('세션 데이터 저장완료')
})
app.get('/get-session', (req, res) => {
   console.log(req.session)
   const { username, role } = req.session
   if (username && role) {
      res.send(`username : ${username}, role: ${role}, 세션 아이디 : ${req.sessionID}`)
   } else {
      res.send('세션을 찾을 수 없습니다.')
   }
})
app.get('/destroy-session', (req, res) => {
   req.session.destroy((err) => {
      if (err) {
         res.send(`세션 삭제 실패: ${err.message}`)
      } else {
         res.send('세션이 삭제되었습니다.')
      }
   })
})

app.listen(app.get('port'), () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${app.get('port')}`)
})
