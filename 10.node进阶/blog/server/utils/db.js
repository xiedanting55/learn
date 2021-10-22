const mysql = require('mysql');
let pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'xdtblog'
});

function query(sql, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, function(err, rows) {
            callback(err, rows);
            connection.release();  //中断连接
        })
    })
}

exports.query = query;