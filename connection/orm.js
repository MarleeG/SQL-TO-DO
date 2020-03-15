const log = console.log;
var connection = require('./connection');

// function printQuestionMarks(){
//     let arr = [];



//     return arr.toString();
// }

var orm ={
    // read
    read: (tablename, cb) => {
        let queryString = `SELECT * FROM ${tablename}`
        connection.query(queryString, (err, results) => {
            if(err){
                throw err;
                return;
            }
            cb(results)
        });
    },
    // create

    create: (tablename, task, cb) => {
        let queryString = `INSERT INTO ${tablename} (task) VALUES (?)`;
        connection.query(queryString, task, (err, results) => {
            if(err){
                throw err;
                return;
            }

            cb(results);
            orm.read('list', res => log(res));
        });
    },

    // delete
    delete: (tablename, id, cb) => {
        let condition = `id=${id}`;
        let queryString = `DELETE FROM ${tablename} WHERE ${condition}`;

        connection.query(queryString, (err, results) => {
            if(err){
                throw err;
                return;
            }

            cb(results);
            orm.read('list', res => log(res));
        });
    },
    // update
    update: (tablename, col,val, id, cb)=> {
        let condition = `id=${id}`;
        let queryString = `UPDATE ${tablename} SET ${col}=${val} WHERE ${condition}`;

        connection.query(queryString, (err, results) => {
            if(err){
                throw err;
                return;
            }

            cb(results);
            orm.read('list', res => log(res));
        });
    }

}

// WORKING EXAMPLES
// orm.read('list', res => log(res));
// orm.create('list', 'Item', res => log(res));
// orm.delete('list', 8, res=> console.log(res));


//         tablename,  column, value,   id callback   
// orm.update('list', 'complete', true, 5, res=> log(res));




module.exports = orm;
