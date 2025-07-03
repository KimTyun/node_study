import fs from 'fs/promises'

fs.readdir('./folder')
   .then((dir) => {
      console.log('폴더 내용 확인', dir)
      return fs.unlink('./folder/newfile.js')
   })
   .then(() => {
      console.log('파일 삭제 성공')
      return fs.rmdir('./folder')
   })
   .then(() => {
      console.log('폴더 삭제 성공')
   })
   .catch((e) => {
      console.log(e)
   })
