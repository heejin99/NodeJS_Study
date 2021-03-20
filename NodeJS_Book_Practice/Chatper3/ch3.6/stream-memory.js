const fs = require('fs');

console.log('before:', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream:', process.memoryUsage().rss);
});

// 큰 파일을 조각내어 작은 버퍼단위로 옮겼기때문에 메모리 차지 비율이 줄었음.