
const express = require('express');
const knex = require('../db/client');
const router = express.Router();

router.get("/", (req, res)=>{
    knex('clucks')
    .orderBy('created_at','desc')
    .then(clucks => {
        res.render('clucks/index.ejs', { clucks: clucks });
    });
});

router.get('/new', (req, res) => {
    if (req.cookies.username) {
        res.render('clucks/new.ejs');
    } else {
        res.render('signIn.ejs');
    }
});

router.post('/', (req, res) => {
    const newCluck = req.body;
    newCluck.username = req.cookies.username;
    knex('clucks')
        .insert(newCluck)
        .returning('*')
        .then(clucks => {
            res.redirect(`/clucks`);
        });
});

module.exports = router;
