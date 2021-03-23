const http = require('http');

const server = http.createServer((req, res) => { // request, response
    // 여기에 응답 내용을 적음
    res.writeHead(200, 'Content-Type:', 'text/html: charset=utf-8'); // 한글 표시를 위해 사용 // 헤더
    res.write('<h1>Hello Node!</h1>'); // 클라이언트로 보낼 데이터
    res.end('<p>Hello Server!</p>');
});
server.listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});

server.on('error', (error) => {
    console.error(error);
});