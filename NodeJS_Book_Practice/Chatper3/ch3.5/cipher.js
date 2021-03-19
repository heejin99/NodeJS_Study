const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';
const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화: ', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'uft8');
result2 += decipher.final('utf8');
console.log('복호화: ', result2);

/* crypto.createCipheriv(알고리즘, 키, iv): 암호화 알고리즘과 키, iv를 넣습니다.
    aes-256-cbc 알고리즘의 경우 키는 32바이트, iv는 16바이트여야합니다. 
    iv는 암호화할 때 사용하는 초기화 벡터
    사용할 알고리즘의 목록은 crypto.getCiphers()를 호출하면 볼 수 있음
*/
/* cipher.update(문자열, 인코딩, 출력 인코딩): 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩
    보통 문자열은 utf8 인코딩을 암호는 base64를 사용
*/
// cipher.final(출력 인코딩): 출력 결과물의 인코딩을 넣으면 암호화가 완료됩니다.
/* crypto.createDecipheriv(알고리즘, 키, iv): 복호화할 때 사용. 암호화할 때 사용했던 알고리즘과 키, iv를 그대로 넣어야 함 */
/* decipher.update(문자열, 인코딩, 출력 인코딩): 암호화된 문장 그 문장의 인코딩, 복호화할 인코딩
    createCipheriv의 update에서 utf8, base64 순이면 createDecipheriv의 update에서는 base64, utf8순으로 넣어야함*/
// decipher.final(출력 인코딩): 복호화 결과물의 인코딩을 넣음