console.log('require가 가장 위에 오지 않아도 됩니다.');
module.exports = '저를 찾아보세요'; // module.exports의 위치는 아무곳이든 상관없음
require('./var'); // require의 위치는 아무곳이든 상관없음

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);