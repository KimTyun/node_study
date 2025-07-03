function longRnningTask() {
   let b = 0
   for (let i = 0; i <= 999999999; i++) {
      b += i
   }
   console.log('작업끝')
}

console.log('작업시작')
setTimeout(longRnningTask, 0)
console.log('끝')
