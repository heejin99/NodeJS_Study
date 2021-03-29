// 서버
const express = require('express');
const path = require('path');
const app = express();
app.set('port', process.env.PORT || 3000); // process.env.port가 없다면 기본값으로 3000번 포트

app.get('/', (req, res) => {
    // res.send('Hello, Express'); // GET 요청시 응답으로 hello, express 전송
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
}) ;