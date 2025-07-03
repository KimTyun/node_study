const EventEmitter = require('events')

const myEvent = new EventEmitter()

myEvent.addListener('event1', () => {
   console.log('event1 실행')
})

myEvent.on('event2', () => {
   console.log('event2 실행')
})

myEvent.on('event2', () => {
   console.log('event2 실행')
})

myEvent.once('event3', () => {
   console.log('event3 실행')
})

myEvent.emit('event1')
myEvent.emit('event1')
myEvent.emit('event2')
myEvent.emit('event3')
myEvent.emit('event3') // once는 한번만 실행된다.

myEvent.on('event4', () => {
   console.log('event4 실행')
})

myEvent.removeAllListeners('event4')
myEvent.emit('event4')

function asdf() {
   console.log('event5 실행')
}

myEvent.on('event5', asdf)

myEvent.removeListener('event5', asdf)
myEvent.emit('event5')

console.log(myEvent.listenerCount('event2'))
