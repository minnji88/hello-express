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
// template html 위치를 인식하고 사용하겠다
// autoescape는 보안상 true

app.get('/express', (req, res) => {
    res.send('express start');
});
// 미들웨어
app.use('/admin', admin);
app.use('/contacts', contacts);

app.listen(port, ()=> {
    console.log('Express listening on port', port)
});