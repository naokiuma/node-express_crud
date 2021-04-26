const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));//静的配信のフォルダを指定。publicのcssや画像などを利用できる
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'express_db',
    port:'8889'
});

connection.connect(function(err){
    if (err) throw err;
	console.log('Connected');
});



app.set('views','./views');
app.set('view engine', 'ejs');

//デフォルトページ
app.get('/', (req, res) => {
    connection.query(
      'SELECT * FROM items',
      (error, results) => {
        res.render('index.ejs', {items: results});//itemというキーでviewにデータベースの中身を渡せる
      }
    );
  });

//新規作成画面のルーティング。node app.jsできどう後、http://localhost:3000/new　で見れる
app.get('/new',(req,res) =>{
    res.render('new.ejs');
})
//新規作成
//新規作成アクション
app.post('/create', (req, res) => {
    console.log(req.body.itemTitle);
    console.log(req.body.itemText);
    connection.query(
        'INSERT INTO items (title, text) VALUES (?, ?)',
        [req.body.itemTitle, req.body.itemText],
        (error, results) => {
        res.redirect('/');
        });
});

//編集画面
//https://expressjs.com/ja/guide/routing.html のルートパラメータ参照
app.get('/edit/:id',(req,res) => {

    connection.query(
      'SELECT * FROM items WHERE id = ?',
      [req,]

    )
})





app.listen(3000);//listenできどう。port3000で動作する