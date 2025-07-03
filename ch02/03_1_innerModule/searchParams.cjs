const url = require('url')
const { URL } = url
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript')

console.log(myURL.searchParams)
console.log(myURL.searchParams.getAll('category'))
console.log(myURL.searchParams.get('limit'))
console.log(myURL.searchParams.get('page'))

console.log(myURL.searchParams.keys())
console.log(myURL.searchParams.values())

myURL.searchParams.append('filter', 'es3')
console.log(myURL)
