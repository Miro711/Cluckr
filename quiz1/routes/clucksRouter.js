
const express = require('express');
const knex = require('../db/client');
const router = express.Router();

router.get("/", (req, res)=>{
    //res.send('GET /clucks is working');
    knex('clucks')
    .then(clucks => {
        res.render('clucks/index.ejs', { clucks: clucks });
    });
});

router.get('/new', (req, res) => {
    res.render('clucks/new.ejs');
});

router.post('/', (req, res) => {
    const newCluck = req.body;
    knex('clucks')
        .insert(newCluck)
        .returning('*')
        .then(clucks => {
            res.redirect(`/clucks`);
            //const cluck = clucks[0];
            //res.redirect(`/clucks/${cluck.id}`);
        });
});

module.exports = router;
