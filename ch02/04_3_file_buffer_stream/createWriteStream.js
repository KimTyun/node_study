import fs from 'fs'

const writeStream = fs.createWriteStream('./writeme2.txt')

writeStream.write('이 글을 씁니다.\n')
writeStream.write('한 번 더 씁니다.')

writeStream.on('finish', () => {
   console.log('파일 쓰기 완료')
})

writeStream.end()
