
const express = require('express');
const router = express.Router();

router.get("/sign_in", (req, res)=>{
    res.render("../views/signIn.ejs");
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7;
router.post('/sign_in', (req, res) => {
    const formData = req.body; 
    res.cookie('username', formData.username, { maxAge: COOKIE_MAX_AGE});
    res.redirect('/clucks');
});

router.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/clucks');
});

router.get("/", (req, res) => {
    res.redirect('/clucks');
});

module.exports = router;
