const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./readme2.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝')

// 파일 읽기 요청만 세 번 보내고 console.log('끝')을 찍음
// 나중에 읽기가 완료되면 백그라운드가 다시 메인 스레드에 알림 
// 메인 스레드는 그제서야 등록된 콜백 함수를 실행