const { odd, even } = require('./var'); // 같은 파일에 있는 var.js에서 odd, even 변수를 가져옴

function checkOddOrEven(num) {
    if (num % 2) { // 홀수면 
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
// module.exports === exports -> True
// 함수를 대입한 경우엔 exports 사용 불가능
// exports를 사용하려면 속성명과 속성 값을 대ㅇㅂ해야합니다.