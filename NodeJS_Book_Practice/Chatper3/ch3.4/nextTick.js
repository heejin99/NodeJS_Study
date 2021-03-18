setImmediate(() => {
    console.log('immediate');
});

// setImmediate나 setTimeout보다 먼저 실행됩니다.
process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);

// resolve된 promise도 nextTick처럼 다른 콜백들보다 우선시됩니다.
Promise.resolve().then(() => console.log('promise'));