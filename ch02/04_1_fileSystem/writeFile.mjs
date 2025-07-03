import fs from 'fs'

fs.writeFile('./writeme.txt', '글1이 입력됩니다', (err) => {
   if (err) {
      throw err
   }
   console.log('완료!')

   fs.readFile('./writeme.txt', (err, data) => {
      console.log(data.toString())
   })
})

import fs2 from 'fs/promises'

fs2.writeFile('./writeme2.txt', '글이 입력됩니다2')
   .then(() => {
      console.log('파일쓰기 완료')
      return fs2.readFile('./writeme2.txt')
   })
   .then((data) => {
      console.log(data.toString())
   })
   .catch((err) => {
      console.log(err)
   })
