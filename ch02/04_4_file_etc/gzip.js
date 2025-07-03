import zlib from 'zlib'
import fs from 'fs'

const readStream = fs.createReadStream('readme4.txt')

const zlibStream = zlib.createGzip()

const writeStream = fs.createWriteStream('readme4.txt.gz')

// readme4.txt 파일 읽기 -> gzip으로 압축, readme4.txt.gz파일에 저장
readStream.pipe(zlibStream).pipe(writeStream)
