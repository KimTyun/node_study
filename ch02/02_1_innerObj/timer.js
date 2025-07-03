/*
const timeOut = setTimeout(() => {
   console.log('1.5초')
}, 1500)

const interval = setInterval(() => {
   console.log('1초마다')
}, 1000)

setTimeout(() => {
   clearTimeout(timeOut)
   clearTimeout(interval)
}, 7000)
*/
// 7초뒤 중지
setTimeout(() => {
   console.log('타임아웃')
}, 0)

// seTimeout(,0) 보다 빨리 실행되긴 한데 항상 그런건 아님
const immediate = setImmediate(() => {
   console.log('실행.')
})

const immediate2 = setImmediate(() => {
   console.log('실행되지 않습니다.')
})

clearImmediate(immediate2)
