const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'express_db',
    port:'8889'
});

//テーブル作成
connection.connect(function(err){
    if(err) throw err;
    console.log('Connected');
    const sql = 'CREATE TABLE items (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255) NOT NULL, text VARCHAR(255) NOT NULL)';
    connection.query(sql,function(err,result){
        if(err) throw err;
        console.log('table created');
    });
});
