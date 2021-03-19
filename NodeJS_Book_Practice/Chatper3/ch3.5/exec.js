const exec = require('child_process').exec;

const process = exec('dir'); // 셸을 실행해서 명령어 수행

process.stdout.on('data', function(data) {
    console.log(data.toString());
})

process.stderr.on('data', function(data) {
    console.error(data.toString());
})