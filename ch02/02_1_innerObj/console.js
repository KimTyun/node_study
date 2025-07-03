const string = 'abc'
const number = 1
const boolean = true
const obj = {
   outside: {
      inside: {
         key: 'value',
      },
   },
}

console.table([
   { name: '제로', birth: 1995 },
   { name: '헤로', birth: 12495 },
])

console.dir(obj, { colors: true, depth: 1 })
console.dir(obj, { colors: true, depth: 2 })

console.time('시간')
for (let i = 0; i <= 100000; i++) {
   let b
   b += i
}
console.timeEnd('시간')

function b() {
   console.trace('에러위치추적')
}

function a() {
   b()
}

a()
