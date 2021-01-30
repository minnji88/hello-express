const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express: app
});

// 미들웨어 세팅 
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended : false }) );
// uploads 파일을 정적파일로!
// 앞이 url + 뒤 폴더이름
app.use('/uploads' , express.static('uploads'));

// global View Variable 
app.use((req, res, next)=>{
    app.locals.isLogin = true;
    next();
});

app.get('/', (req, res) => {
    res.send('express start');
});

// Routing
app.use('/admin',  admin);
app.use('/contacts', contacts);

app.listen(port, ()=> {
    console.log('Express listening on port', port)
});