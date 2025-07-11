// 로그인 시 사용자 정보를 DB에서 조회하고 사용자 존재 여부와 비밀번호 비교
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/user')

module.exports = function () {
   passport.use(
      new LocalStrategy(
         {
            usernameField: 'email',
            passwordField: 'password',
         },
         //   로그인 인증 로직
         async (email, password, done) => {
            try {
               const exUser = await User.findOne({ where: { email } })
               // 2. 이메일 해당하는 사용자가 있으면 비밀번호가 맞는지 확인
               if (exUser) {
                  const result = await bcrypt.compare(password, exUser.password)

                  if (result) {
                     done(null, exUser)
                  } else {
                     done(null, false, { message: '비밀번호가 일치하지 않습니다.' })
                  }
               } else {
                  done(null, false, { message: '가입되지 않은 회원입니다.' })
               }
            } catch (error) {
               console.log(error)
               done(error)
            }
         },
      ),
   )
}
