const fs = require('fs').promises; // 프로미스 에러는 catch 하지 않아도 됩니다.

setInterval(() => {
    fs.unlink('./abcdefg.js');
}, 1000);