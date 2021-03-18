console.log(this); // 최상위 스코프에 존재하는 this는 moudle.exporst를 가리킴
console.log(this === module.exports);
console.log(this === exports);
function whatIsThis() { // 함수 선언부 this는 global을 가리킴
    console.log('function', this === exports, this === global);
}
whatIsThis()