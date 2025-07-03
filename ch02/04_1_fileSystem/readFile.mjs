import fs from 'fs'

fs.readFile('./readme.txt', (err, data) => {
   //data: 파일내용
   if (err) {
      throw err
   }
   console.log(data)
   console.log(data.toString())
})

import fs2 from 'fs/promises'

fs2.readFile('./readme.txt')
   .then((data) => {
      console.log(data.toString())
   })
   .catch((err) => console.log(err))
