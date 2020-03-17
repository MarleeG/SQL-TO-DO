const log = console.log;
const path = require("path");
var exphbs  = require('express-handlebars');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

const routes = require('./routes/routes');

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// middleware
app.use(express.static("public"));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);





app.listen(PORT, (err) => {
    if(err){
        return err;
    }else{
        log(`http://localhost:${PORT}`);
    }
});
