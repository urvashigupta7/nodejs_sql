var  express=require('express');
var app=express();
var bodyparser=require('body-parser');
var methodoverride=require('method-override');
var mysql=require('mysql');
app.use(methodoverride('_method'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Urvashi_07',
    database: 'urvashi'
});
db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('Connected to database');
});
global.db = db;
app.get('/',(req,res)=>{
    let query = "SELECT * FROM friends"; 
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }else{
        res.render('home.ejs', {friends: result});
    }
    });
     
})
app.put('/edit/:id',(req,res)=>{
    let query="UPDATE friends SET firstname='"+req.body.firstname+"', lastname='"+req.body.lastname+"' WHERE id="+req.params.id;
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }else{
        res.redirect('/');
    }
    });
})
app.delete('/delete/:id',(req,res)=>{
    let query="DELETE FROM friends WHERE id="+req.params.id;
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }else{
        res.redirect('/');
    }
    });
})
app.post('/',(req,res)=>{
    let query="INSERT INTO friends (firstname,lastname) VALUES(?,?)";
    var value=[req.body.firstname,req.body.lastname];
    db.query(query,value, (err, result) => {
        if (err) {
            console.log(err);
        }else{
        res.redirect('/');
    }
    });
})
app.listen(process.env.PORT||3000,process.env.IP,function(){
console.log('server has started');
})