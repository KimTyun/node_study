import fs from 'fs/promises'

fs.copyFile('readme4.txt', 'writeme4.txt')
   .then(() => {
      console.log('복사완료')
   })
   .catch((e) => {
      console.log(e)
   })
