const fs = require('fs');
// 노드 자체에서 잡아주는 에러
setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);