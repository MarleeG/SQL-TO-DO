const router = require("express").Router();

router.get("/", (req, res) => {
    res.redirect('/list');
});


router.get('/list', (req, res) => {
    // res.send('THE ROOT - handlebars SEND');

    res.render("index")
});

module.exports = router;