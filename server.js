const log = console.log;
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


// middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(path.join(__dirname, "index.html"));
});

app.listen(PORT, (err) => {
    if(err){
        return err;
    }else{
        log(`http://localhost:${PORT}`);
    }
});