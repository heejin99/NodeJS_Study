const crypto = require('crypto');

console.log('base64: ',crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ',crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64: ',crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

/* createHash(알고리즘): 사용할 해쉬 알고리즘. md5, sha1, sha256, sha512
                        md5, sha1은 취약점 발견. 현재는 sha512정도로 충분하지만 취약해지면 바꿔야함
    update(문자열): 변환할 문자열을 넣습니다.
    digest(인코딩): 인코딩할 알고리즘. base64, hex, latin1이 주로 사용
                    base64가 결과 문자열이 가장 짧음. 결과물로 변환된 문자열 반환*/