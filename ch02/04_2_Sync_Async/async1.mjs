import fs from 'fs/promises'

console.log('시작')

fs.readFile('./readme2.txt')
   .then((data) => {
      console.log('1번째', data.toString())
   })
   .catch((err) => {
      console.log(err)
   })

fs.readFile('./readme2.txt')
   .then((data) => {
      console.log('2번째', data.toString())
   })
   .catch((err) => {
      console.log(err)
   })

fs.readFile('./readme2.txt')
   .then((data) => {
      console.log('3번째', data.toString())
   })
   .catch((err) => {
      console.log(err)
   })
console.log('끝')
