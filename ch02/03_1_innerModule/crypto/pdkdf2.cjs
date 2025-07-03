const crypto = require('crypto')

//64바이트의 랜덤한 바이트 데이터를 생성한다.
crypto.randomBytes(64, (e, b) => {
   const salt = b.toString('base64')
   crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (e, k) => {
      console.log(k.toString('base64'))
   })
})
