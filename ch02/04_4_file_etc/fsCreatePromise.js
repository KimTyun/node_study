import fs from 'fs/promises'
import constants from 'constants' //파일 시스템 관련 상수들

// ./folder에 대한 접근 권한 확인
// fok : 파일 존재여부, wok 쓰기권한여부, rok 읽기권한 여부
fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
   .then(() => {
      return Promise.reject('이미 폴더가 있음')
   })
   .catch((e) => {
      if (e.code === 'ENOENT') {
         console.log('폴더 없음')
         return fs.mkdir('./folder')
      }
      console.log('e1:', e)
      return Promise.reject(e)
   })
   .then(() => {
      //폴더 생성이 성공했을 때,
      console.log('폴더 만들기 성공')
      //file.js 파일 생성
      // 두번째 매개변수 어떻게 파일을 건드릴지=> w: write 파일만들겟음, r:read 파일 읽겟음, a:add 파일에 추가하겟음
      return fs.open('./folder/file.js', 'w')
   })
   .then((fd) => {
      console.log('빈 파일 만들기 성공', fd)
      return fs.rename('./folder/file.js', './folder/newFile.js')
   })
   .catch((e) => {
      console.log('e2', e)
   })
