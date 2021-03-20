const buffer = Buffer.from('저를 버퍼로 바꿔보세요'); // 문자열을 버퍼로 바꿀 수 있습니다.
console.log('from():', buffer); 
console.log('length:', buffer.length); // 버퍼의 속성(바이트 단위)
console.log('toString():', buffer.toString()); // 버퍼를 다시 문자열로 바꿀 수 있습니다.

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array); // 배열 안에 든 버퍼들을 하나로 합칩니다.
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5); // 빈 버퍼를 생성합니다.
console.log('alloc():', buffer3);