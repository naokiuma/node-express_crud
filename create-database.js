const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
});

//mysqlに接続してデータベース作成(成功するとconsoleに'database created'と出る)
connection.connect(function(err){
    if(err) throw err;
    console.log('connneted');
    connection.query('CREATE DATABASE express_db',function(erro,result){
        if(err) throw err;
        console.log('database created');
    });
});