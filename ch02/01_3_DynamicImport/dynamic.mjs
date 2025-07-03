const a = true

// if (a) {
//    //    import './func.mjs'
// }
// console.log('성공')

if (a) {
   await import('./func.mjs')
}
console.log('성공')
