const passport = require('passport')
const local = require('./localStrategy')
const User = require('../models/user')

module.exports = function () {
   //직렬화(serializeUSer) : 로그인 성공 후 사용자 정보를 세션에 저장
   passport.serializeUser((user, done) => {
      console.log('유저 직렬화', user)
      done(null, user.id) //user table의 id
   })

   // 역직렬화(deserializeUser): 클라이언트에게 request가 올때 마다 세션에 저장된 사용자 id를 바탕으로 사용자 정보를 조합 id=pk
   passport.deserializeUser((id, done) => {
      User.findOne({ where: { id }, attributes: ['id', 'nick', 'email', 'createdAt', 'updatedAt'] })
         .then((user) => done(null, user))
         .catch((err) => done(err))
   })
   local()
   //localstrategy.js에서 export된 함수를 Passport에 추가
}
