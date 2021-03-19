const os = require('os');

console.log('운영체제 정보-----------------------');
console.log('os.arch():', os.arch()); // 프로세서 아키텍처 정보
console.log('os.platform():', os.platform()); // 운영체제 플랫폼 정보
console.log('os.type():',os.type()); // 운영체제 종류
console.log('os.uptime():', os.uptime()); // 운영체제 부팅 후 흐른 시간
console.log('os.hostname():', os.hostname()); // 컴퓨터 이름
console.log('os.release():', os.release()); // 운영체제 버전

console.log('경로-------------------------------');
console.log('os.homedir():', os.homedir()); // 홈 디렉토리 경로
console.log('os.tmpdir():', os.tmpdir()); // 임시 파일 저장 경로

console.log('cpu 정보---------------------------');
console.log('os.cpus():',os.cpus()); // 컴퓨터 코어 정보
console.log('os.cpus().length:', os.cpus().length); // 코어의 개수

console.log('메모리 정보-------------------------');
console.log('os.freemem():', os.freemem()); // 사용 가능한 메모리
console.log('os.totalmem():', os.totalmem()); // 전체 메모리 용량

// os.constants : 각종 에러와 신호에 대한 정보를 보여줌