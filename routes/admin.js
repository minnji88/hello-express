const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin');
})

router.get('/products', (req, res) => {
    // res.send('admin products');
    res.render('admin/products.html', {

    });
})

module.exports = router;