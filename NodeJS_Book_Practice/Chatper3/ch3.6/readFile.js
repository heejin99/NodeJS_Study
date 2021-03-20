const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data); // 버퍼: 메모리의 데이터
    console.log(data.toString());
});