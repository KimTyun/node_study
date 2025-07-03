// 양방향 암호화

const crypto = require('crypto')

const algorithm = 'aes-256-cbc' //암호화 알고리즘 종류
const key = 'abcdefghijklmnopqrstuvwxyz123456' // 복호화에 사용할 키
const iv = '1234567890123456' //초기화 벡터

const cipher = crypto.createCipheriv(algorithm, key, iv)

//암호화
let result = cipher.update('어쩌구저쩌구', 'utf-8', 'base64')
result += cipher.final('base64')
console.log('암호화 :', result)

//복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv)
let result2 = decipher.update(result, 'base64', 'utf-8')
result2 += decipher.final('utf8')
console.log('복호화 :', result2)
