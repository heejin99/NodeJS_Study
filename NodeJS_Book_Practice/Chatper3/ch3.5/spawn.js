const spawn = require('child_process').spawn;

const process = spawn('python', ['test.py']); // 새로운 프로세스를 띄우면서 명령어 실행
// 세번째 인수로 shell:true를 제공하면 exec처럼 셸을 실행해서 명령어 수행

process.stdout.on('data', function(data) {
    console.log(data.toString());
})

process.stderr.on('data', function(data) {
    console.error(data.toString());
})