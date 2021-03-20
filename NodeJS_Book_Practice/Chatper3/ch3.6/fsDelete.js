const fs = require('fs').promises;

fs.readdir('./folder') // 폴더 안의 내용물 확인. 배열 안에 내부 파일과 폴더명이 나옴
    .then((dir) => {
        console.log('폴더 내용 확인', dir);
        return fs.unlink('./folder/newFile.js'); // 파일을 지울 수 있습니다.
    })
    .then(() => {
        console.log('파일 삭제 성공');
        return fs.rmdir('./folder'); // 폴더를 지울 수 있습니다. 내부 파일을 먼저 지워야합니다.
    })
    .then(() => {
        console.log('폴더 삭제 성공');
    })
    .catch((err) => {
        console.error(err);
    });