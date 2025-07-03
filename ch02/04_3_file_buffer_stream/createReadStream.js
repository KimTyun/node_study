import fs from 'fs'

// 파일을 읽기 위한 스트림 생성

//highwatermark : 한번에 읽어드릴 버퍼 크기를 16byte로 설정
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 })

const data = []

//data 이벤트 : 스트림에서 데이터(chunk)가 들어올때마다 콜백함수 실행
readStream.on('data', (chunk) => {
   data.push(chunk)
   console.log('data: ', chunk, chunk.length)
})

// end 이벤트 : 스트림의 읽기가 끝났을 때 발생하는 이벤트

readStream.on('end', () => {
   console.log('end: ', Buffer.concat(data).toString())
})

readStream.on('error', (err) => {
   console.log('error: ', err)
})
