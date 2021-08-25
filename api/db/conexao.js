const mysql = require('mysql');

let conexao = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'caduser',
});

module.exports = conexao;