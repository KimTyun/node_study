const Sequelize = require('sequelize')
const User = require('./user')
const Comment = require('./comment')
const Country = require('./country')
const Capital = require('./capital')
const Post = require('./post')
const Hashtag = require('./hashtag')
const env = process.env.NODE_ENV || 'development'

const config = require('../config/config.json')[env]
const db = {}
require('dotenv').config()

// sequelize를 사용해서 데이터베이스 연결 객체 생성
const sequelize = new Sequelize(config.database, config.username, config.password, config)

//db 객체에 sequelize 모델들 저장
db.sequelize = sequelize

//db 객체에 테이블 저장
db.User = User
db.Comment = Comment
db.Country = Country
db.Capital = Capital
db.Post = Post
db.Hashtag = Hashtag

//모델 초기화
User.init(sequelize)
Comment.init(sequelize)
Country.init(sequelize)
Capital.init(sequelize)
Post.init(sequelize)
Hashtag.init(sequelize)

User.associate(db)
Comment.associate(db)
Country.associate(db)
Capital.associate(db)
Post.associate(db)
Hashtag.associate(db)

module.exports = db
