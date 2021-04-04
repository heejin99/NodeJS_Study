// 서버
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000); // process.env.port가 없다면 기본값으로 3000번 포트

app.use(morgan('dev')); // morgan 미들웨어 사용 (개발 환경 - dev, 배포환경-combined)
app.use('/', express.static(path.join(__dirname, 'public'))); // 정적인 파일을 제공하는 라우터 역할
app.use(express.json()); // body-parser: 요청의 본문에 있는 데이터를 해석해 req.body 객체로 만들어주는 미들웨어 (따로 설치 필요x)
app.use(express.urlencoded({ extended : false}));
// urlencoded(폼전송): extended가 false면 노드의 querystring 모듈을 사용하여 쿼리스트링 해석,
// true 면 qs 모듈을 사용하여 쿼리 스트링 해석
app.use(cookieParser(process.env.COOKIE_SECRET)); // 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만든다.
// 쿠키 생성/제거 : res.cookie(키,값,옵션)/res.clearCookie()
// .env에 비밀키 관리
app.use(session({ // 데이터 임시 저장 시 유용
    resave: false, // 요청이 올 때 세션에 수정사항이 생기지 않아도 세션을 다시 저장할 지 설정
    saveUninitialized: false, // 세션에 저장할 내역이 없더라고 처음부터 세션을 생성할지 설정
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});

app.get('/', (req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();    
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들 웨어로 갑니다.');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
}) ;
// dotenv를 제외한 다른 패키지는 미들웨어 (dotenv: process.env 관리)