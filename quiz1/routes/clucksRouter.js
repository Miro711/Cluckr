
const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send('GET /clucks is working');
});

router.get('/new', (req, res) => {
    res.render('clucks/new.ejs');
});

router.post('/', (req, res) => {
    const newCluck = req.body;
});

module.exports = router;
