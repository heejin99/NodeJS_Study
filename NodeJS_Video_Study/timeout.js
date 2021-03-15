function sayHello() {
    console.log('Hello World');
}

// sayHello();
// setTimeout(function() {
//     sayHello();
// }, 3*1000);
setInterval(function() { // 2초 단위로 주기적으로 출력 
    sayHello();
}, 2*1000);