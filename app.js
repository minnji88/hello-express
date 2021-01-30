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

// body-parser 하는 방법
// app.use((req, res, next)=> {
//     req.body = {

//     }
// });

app.get('/', (req, res) => {
    res.send('express start');
});

// Routing
app.use('/admin',  admin);
app.use('/contacts', contacts);

app.listen(port, ()=> {
    console.log('Express listening on port', port)
});