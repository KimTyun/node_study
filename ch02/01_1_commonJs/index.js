// 1. 모듈 사용법
// const checkNumber = require('./func')

// console.log(checkNumber(2))
// console.log(checkNumber(3))

//2. require는 함수
console.log(require.name)

// 3. 순환참조문제
// const insideDep1 = require('./dep1')
// const insideDep2 = require('./dep2')
// insideDep1()
// insideDep2()
