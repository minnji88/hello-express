const express = require('express');
// nunjucks 모듈은 app.js에서
const nunjucks = require('nunjucks');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express: app
});
// template를 인식하고 사용하겠다
// autoescape는 보안상 true
// express : app는 사용할 주체

app.get('/express', (req, res) => {
    res.send('express start');
});
// 미들웨어
app.use('/admin', admin);
app.use('/contacts', contacts);

// app.listen: 포트 명과 리스닝이 성공했을 때 실행될 콜백 함수
app.listen(port, ()=> {
    console.log('Express listening on port', port)
});