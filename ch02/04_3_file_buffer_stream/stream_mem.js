import fs from 'fs'

console.log(`before : ${process.memoryUsage().rss}`) //rss- 프로세스가 사용중인 메모리

const readStream = fs.createReadStream('./big.txt')
const writeStream = fs.createWriteStream('./big3.txt')

readStream.pipe(writeStream)

readStream.on('end', () => {
   console.log(`before : ${process.memoryUsage().rss}`)
})
