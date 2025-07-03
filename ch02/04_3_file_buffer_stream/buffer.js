// 버퍼객체

const buffer = Buffer.from('저를 버퍼로 바꿔보세요.')
console.log('from():', buffer)
console.log('length:', buffer.length)
console.log('from():', buffer.toString())

const arr = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기 ')]

const buffer2 = Buffer.concat(arr)
console.log('concat : ', buffer2.toString())
