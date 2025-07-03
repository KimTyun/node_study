import { odd, even } from './ment.mjs'
function checkNumber(num) {
   return num % 2 === 1 ? odd : even
}

export default checkNumber
