const log = console.log;
const orm = require('../connection/orm');

// WORKING EXAMPLES
// read =>  orm.read('list', res => log(res));
// create => orm.create('list', 'Item', res => log(res));
// delete => orm.delete('list', 8, res=> console.log(res));
// update => 
//         tablename,  column, value,   id callback   
// orm.update('list', 'complete', true, 5, res=> log(res));

var list = {
    read: (cb) => {
        orm.read('list', res => cb(res));
    },
    create: (task_val, cb) => {
        orm.create('list', task_val, res => cb(res));
    },
    delete: (id, cb) => {
        orm.delete('list', id, res => cb(res));
    }, 
    update: (id, cb) => {
        orm.update('list', 'complete', true, id, res => cb(res));
    }
}



module.exports = list;