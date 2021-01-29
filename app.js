// express 모듈을 가져온다.(require)
const express = require('express');

// 모듈은 함수라서 애플리케이션이라는 것을 리턴한다. 
// 그 리턴한 값을 제어하기 위해서 app 객체를 생성한다.
const app = express();
const port = 3000;

// 사용자가 홈페이지에 접속할 때는 GET POST
// GET(URL로 접속하는 방식) : 요청 화면에 이렇게 보여줘라!
app.get('/express', (req, res) => {
    res.send('hello express 333');
});

// app.listen: 포트 명과 리스닝이 성공했을 때 실행될 콜백 함수
app.listen(port, ()=> {
    console.log('Express listening on port', port)
});