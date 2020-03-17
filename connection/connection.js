const log = console.log;
const mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
        database: 'SQL_TO_DO'
    });
}

connection.connect((err) => {
    if (err){
        console.error("error connecting:  ", + err.stack);
        return;
    }

    log("connected as id " + connection.threadId);
});

module.exports = connection;