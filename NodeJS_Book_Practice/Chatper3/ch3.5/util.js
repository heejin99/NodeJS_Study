const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => { // 함수가 deprecated 처리 되었음
    console.log(x+y);
}, 'dontUseMe 함수는 deprecated 되었으니 더이상 사용하지마세요');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes); // 콜백 패턴을 프로미스 패턴으로 바꿈
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });