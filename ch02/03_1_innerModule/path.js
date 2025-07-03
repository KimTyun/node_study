import path from 'path'
import { fileURLToPath } from 'url'

console.log('경로==================================')

console.log(path.sep)
const __filename = fileURLToPath(import.meta.url)
const string = __filename
console.log(string)

console.log('경로 분석-=-=-=-=-=-=-=-=-=-')
console.log(path.dirname(string))
console.log(path.extname(string))
console.log(path.basename(string))
console.log(path.basename(string, '.js'))

console.log('경로조작 --------------------------')
console.log(path.parse(string))
console.log(
   path.format({
      root: 'c:\\',
      dir: 'c:\\Users\\EZENIC-132\\KTY\\VSC\\project\\04.Nodejs\\study\\ch02\\03_1_innerModule',
      base: 'path.js',
      ext: '.js',
      name: 'path',
   }),
)

//  \랑 /랑 알아서 정상적으로 변환
console.log(path.normalize('C://project//node_class\\ch02\\03_1_innerModule'))

console.log(path.relative('C:\\project\\node_class\\ch02\\03_1_innerModule\\path.js', 'C:\\'))

console.log(path.join('C:project/node', '/users', '/ezen'))
