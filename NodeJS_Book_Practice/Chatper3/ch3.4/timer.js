/* setTimeout(콜백함수, 밀리초): 주어진 밀리초 이후에 콜백함수 실행 */
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

/* setInterval(콜백함수, 밀리초): 주어진 밀리초마다 콜백함수 반복 실행 */
const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지않습니다.');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2); /* setTimeout 취소 */
    clearInterval(interval); /* setInterval 취소 */
},2500)

/* 콜백 함수를 즉시 실행합니다. */
const immediate = setImmediate(() => {
    console.log('즉시 실행');  /* 1번째로 실행 */
});

const immediate2 = setImmediate(() => {
    console.log('실행되지않습니다.'); /* 실행 안됨 */
});

/* setImmediate를 취소합니다. */ 
clearImmediate(immediate2);

/*  immediate가 제일 먼저 실행
    immediate2가 clear되었으므로 실행이 안된다.
    코드 실행 1초 후 interval의 콜백이 실행
    코드 실행 1.5초 후 timeout의 콜백이 실행
    코드 실행 2초 후 interval의 콜백이 실행
    (setTimeout함수 실행)
    코드 실행 2.5초 후 clearTimeout과 clearInterval이 각각 timeout2와 interval 취소
*/