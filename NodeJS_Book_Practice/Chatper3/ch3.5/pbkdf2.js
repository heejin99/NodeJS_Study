const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt: ',salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password: ',key.toString('base64'));
    });
});

/* randomBytes() : 64바이트 길이의 문자열을 만드는게 salt가 된다.
   pbkdf2() : 순서대로 비밀번호, salt, 반복횟수, 출력바이트, 해시 알고리즘을 인수로 넣음
              예시) sha512로 변환된 결괏값을 다시 sha512로 변환하는 과정을 10만번 반복 (약 1초)*/