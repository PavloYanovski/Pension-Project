
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
// var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
app.use((req, res, next) => {
    res.status(200).json({
        message:"It is work!"
    })
});

app.post('/login', function(req, res){
var response = {
name : req.body.name,
clg_name : req.body.clg_name,
year: req.body.year
};
console.log(response);
res.end(JSON.stringify(response));
});

module.exports = app;


// var express = require('express');
// var bodyParser = require('body-parser');
var mysql = require('mysql');
// var path = require('path');  
var app = express();

// Setting path for public directory 
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
})


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pension"
  });
// app.get("/login", function(req, res){
//     res.send("Hellow world");
// })

app.post('/login', function(req, res){
  console.log("loginnnnnnnnnnn");
   var response = {
    username : req.body.username,
    password : req.body.password
    };

      
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM users where username = '"+ req.body.username +"' AND password = '"+req.body.password+"'", function (err, result, fields) {
      if (err) throw res.send(JSON.stringify(err));;     
      res.send(JSON.stringify(result));
    });
  });
      
});

//Create server
var server = app.listen(3001, function(){
var host = server.address().address;
var port = server.address().port;
console.log("Listening at http://%s:%s", host, port);
});