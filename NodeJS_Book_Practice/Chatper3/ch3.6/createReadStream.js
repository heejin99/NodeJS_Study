const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16}); // 파일 경로, highWaterMark: 버퍼의 크기
const data = [];

readStream.on('data', (chunk) => { // 파일 읽기 시작
    data.push(chunk);
    console.log('data:', chunk, chunk.length);
});

readStream.on('end', () => { // 파일을 다 읽으면 실행
    console.log('end:', Buffer.concat(data).toString());
});

readStream.on('err', (err) => { // 파일 읽는 도중 에러 발생
    console.log('error', err);
});