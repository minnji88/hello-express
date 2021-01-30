const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin app');
});

router.get('/products', (req, res) => {
    res.render('admin/products.html', {
    });
})

// REST API
// GET /users => 사용자정보
// POST /users => 사용자추가
// GET /users/(ID) -> 한명만 볼때
// PUT /users/(ID) => 한명 수정하기
// DELETE /users/(ID) => 삭제

router.get('/products/write', (req, res) => {
    res.render('admin/write.html');
})
router.post('/products/write', (req, res)=>{
    res.send(req.body);
});

module.exports = router;