const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../models/user');

module.exports = () => {
    passport.serializeUser((user, done) => { // 로그인 시 실행 - 사용자 정보 객체를 세션에 아이디로 저장
        done(null, user.id); 
    });
    passport.deserializeUser((id, done) => { // 매 요청 시 실행 - ㅔ션에 저장한 아이디를 통해 사용자 정보 객체를 불러옴
        User.findOne({
            where: { id },
            include: [{
                model: User,
                attributes: ['id', 'nick'], // 실수로 비밀번호 조회 방지
                as: 'Followers',
            }, {
                model: User,
                attributes: ['id', 'nick'],
                as: 'Followings',
            }]
        })// 세션에 저장했던 아이디를 받아 db에서 사용자 정보 조회
            .then(user => done(null, user))
            .catch(err => done(err));
    });
    local();
    kakao();
}