
const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("../views/signIn.ejs");
});

router.post('/sign_in', (req, res) => {
    const formData = req.body; 
    console.log(formData)
    res.cookie('username', formData.username, { maxAge: 1000*60*60*24*7});
    res.redirect('/');
});

router.post('/sign_out', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
});

module.exports = router;
