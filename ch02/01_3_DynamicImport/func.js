const { odd, even } = require('./ment.js')

function checkOddEven(num) {
   if (num % 2 === 0) {
      return even
   } else {
      return odd
   }
}

module.exports = checkOddEven
