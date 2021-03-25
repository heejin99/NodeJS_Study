const http = require('http');
const fs = require('fs').promises;

const users = {}; // 데이터 저장용 - db 대용

http.createServer(async (req, res) => {
    try{
        console.log(req.method, req.url);
        if (req.method === 'GET') { // http 요청 메소드 구분
            if (req.url === '/') {
                const data = await fs.readFile('./restFront.html');
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/about') {
                const data = await fs.readFile('./about.html');
                res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
                return res.end(data);
            } else if (req.url === '/users') {
                res.writeHead(200, { 'Content-Type' : 'text/plain; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
            // 주소가 / 도 /about 도 아니라면
            try { // restFront.js 면 restFront.js 파일을 제공
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (err) {
                // 주소에 해당하는 라우트를 못찾았다는 404 Not Found error 발생
            }
        } else if (req.method === 'POST') { // 사용자 새로 저장
            if (req.url ==='/user'){
                let body = '';
                // 요청의 body를 stream 형식으로 받음
                req.on('data', (data) => { // 요청의 본문에 들어있는 데이터를 꺼내기 위한 작업
                    body += data;
                });
                // 요청의 body를 다 받은 후 실행 됨
                return req.on('end', () => {
                    console.log('POST 본문(Body):', body);
                    const {name} = JSON.parse(body);
                    const id = Date.now();
                    users[id] = name;
                    res.writeHead(201);
                    res.end('등록 성공');
                })
            }
        } else if (req.method === 'PUT') { // 해당 아이디의 사용자 데이터 수정
            if (req.url.startsWith('/user/')) {
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data) => {
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT 본문(Body):', body);
                    users[key] = JSON.parse(body).name;
                    return res.end(JSON.stringify(users));
                })
            }
        } else if (req.method === 'DELETE') { // 해당 아이디의 사용자 제거
            if (req.url.startsWith('/user/')) {
                const key = rq.url.split('/')[2];
                delete users[key];
                return res.end(JSON.stringify(users));
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND');
    } catch (err) {
        console.error(err);
        res.writeHead(500); // 응답 중 예기치 못한 에러 발생
        res.end(err);
    }
})
    .listen(8082, () => {
        console.log('8082번 포트에서 서버 대기중입니다.');
    });