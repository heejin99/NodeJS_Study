const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie ='') => // 문자열을 객체로 바꿔줌
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    // 주소가 /login으로 시작
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        // 쿠키 유효 시간을 현재 시간 +5분으로 설정
        expires.setMinutes(expires.getMinutes() + 5);
        res.writeHead(302, {
            Location: '/', // 헤더에는 한글을 설정할 수 없으므로 encodeURLComponent로 인코딩 Set-Cookie의 값으로는 제한된 ascii 코드만 들어가야하므로 줄바꿈을 넣으면 안됨
            'Set-Cookie' : `name=${encodeURIComponent(name)};Expires=${expires.toGMTString()};HttpOnly; Path=/`,
        });
        res.end();
    // name이라는 쿠키가 있는 경우
    } else if (cookies.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 안녕하세요`);
    } else { // 쿠키가 없다면 로그인 페이지를 보냄
        try {
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        } catch(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(err.message);
        }
    }
})
    .listen(8084, () => {
        console.log('8084번 포트에서 서버 대기중입니다.');
    });

// 쿠키명=쿠키값 
// Expires=날짜: 만료 기한
// Max-age-초 : 날짜 대신 초를 입력할 수 있음 (expires보다 우선)
// Domain=도메인명
// Path=URL: 쿠키가 전송될 url
// Secure: HTTPS일 경우에ㅔ만 쿠키 전송
// HttpOnly: 자바 스크립트에서 쿠키 접근 불가능