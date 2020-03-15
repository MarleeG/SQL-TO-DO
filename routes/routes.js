const router = require("express").Router();

// WORKING EXAMPLES FOR LIST
// list.read(res => log(res));
// list.create('Cook', res => log(res));
// list.delete(4, res => log(res));
// list.update(10, res => log(res));

router.get("/", (req, res) => {
    res.redirect('/list');
});


router.get('/list', (req, res) => {
    // res.send('THE ROOT - handlebars SEND');

    res.render("index")
});

module.exports = router;