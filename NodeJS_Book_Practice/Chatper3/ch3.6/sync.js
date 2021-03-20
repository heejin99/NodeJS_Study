const fs = require('fs');

console.log('시작');

let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());

console.log('끝')

// 순서대로 실행되지만 백그라운드 작업이 진행되는 동안 메인 스레드는 계속 대기해야하는 치명적인 단점