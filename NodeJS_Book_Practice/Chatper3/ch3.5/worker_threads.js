const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) { // 메인 스레드
    const
    worker = new Worker(__filename); // 1 현재 파일을 워커 스레드에서 실행하도록 함
    worker.on('message', message => console.log('from worker', message)); // 5 메시지를 받음 
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping'); // 2 워커에 데이터를 보냄
} else { // 우리가 생성한 워커 스레드
    parentPort.on('message', (value) => { // 3 부모로부터 메시지를 받고
        console.log('from parent', value);
        parentPort.postMessage('pong');  // 4 부모에게 메시지를 보냄 
        parentPort.close();
    });
}