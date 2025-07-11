const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')

router.get('/', (req, res, next) => {
   res.send('ㅇㅇ')
})

//회원가입
router.post('/join', async (req, res, next) => {
   try {
      const { email, nick, password } = req.body

      const exUser = await User.findOne({
         where: {
            email,
         },
      })
      if (exUser) {
         return res.status(409).json({
            succes: false,
            message: '이미 사용중인 이메일입니다.',
         })
      }
      const hash = await bcrypt.hash(password, 12) //12:소금

      const newUser = await User.create({
         email,
         nick,
         password: hash,
      })

      res.status(201).json({
         succes: true,
         message: '사용자가 성공적으로 등록되었습니다',
         user: {
            id: newUser.id,
            email: newUser.email,
            nick: newUser.nick,
         },
      })
   } catch (error) {
      error.message = '회원가입 중 오류가 발생했습니다.'
      next(error)
   }
})

//로그인
router.post('/login', async (req, res, next) => {
   passport.authenticate('local', (authError, user, info) => {
      if (authError) {
         return res.status(500).json({
            succes: false,
            message: '인증 중 오류 발생',
            error: authError,
         })
      }
      if (!user) {
         //비밀번호 불일치, 사용자 없음의 경우 user가 false
         return res.status(401).json({
            succes: false,
            message: info.message || '로그인 실패',
         })
      }

      //인증 성공시
      req.login(user, (loginError) => {
         if (loginError) {
            //로그인 상태로 바꾸는 중 오류 발생시
            return res.status(500).json({
               success: false,
               message: '로그인 중 오류 발생',
               error: loginError,
            })
         }
         //로그인 성공시
         res.status(200).json({
            success: true,
            message: '로그인 성공',
            user: {
               id: user.id,
               nick: user.nick,
            },
         })
      })
   })(req, res, next)
})

//로그아웃
router.get('/logout', async (req, res, next) => {
   req.logout((logoutError) => {
      if (logoutError) {
         //로그아웃 상태
         return res.status(500).json({
            success: false,
            message: '로그아웃 중 오류 발생',
            error: logoutError,
         })
      }
      res.status(200).json({
         success: true,
         message: '로그아웃에 성공했습니다.',
      })
   })
})

//로그인 상태 확인
router.get('/status', async (req, res, next) => {
   if (req.isAuthenticated()) {
      //로그인 되었을 때
      res.status(200).json({
         isAuthenticated: true,
         user: {
            id: req.user.id,
            nick: req.user.nick,
         },
      })
   } else {
      //로그인이 되지 않았을때
      res.status(200).json({
         isAuthenticated: false,
      })
   }
})
module.exports = router
