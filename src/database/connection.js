var knex = require('knex')({
      client: 'mysql',
      connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'quantum28042004',
        database : 'todo',
        port : '3390'
      }
    });
module.exports = knex