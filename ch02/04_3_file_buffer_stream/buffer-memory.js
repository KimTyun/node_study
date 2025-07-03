import fs from 'fs'

console.log(`before : ${process.memoryUsage().rss}`) //rss- 프로세스가 사용중인 메모리

const data1 = fs.readFileSync('./big.txt')
fs.writeFileSync('./big2.txt', data1) //읽은 파일을 big2에 쓰기

console.log(`before : ${process.memoryUsage().rss}`)
