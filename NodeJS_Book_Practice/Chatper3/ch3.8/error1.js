setInterval(() => { // 프로세스가 멈추는지 여부를 체크하기 위함
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!');
    } catch (err) {
        console.error(err);
    }
}, 1000);