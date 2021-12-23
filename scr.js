var mysql = require('mysql');
var express = require('express')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
})

con.connect((err) => {
  con.on('error', (err) => {
    console.log("[mysql error]",err);
  });
  console.log("You have access");

});


const app = express();
//DB

app.get("/database", (err, res) => {
    var db = 'CREATE DATABASE database123';
    con.on('error', function(err) {
      console.log("[mysql error]",err);
    });
      res.send('Database Created!')
    })

    //table
    
app.get('/table', (err,res)=> {
        var table = "CREATE TABLE brands (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), model VARCHAR(255))";
        
          con.query(table, function (err, result) {
            con.on('error', function(err) {
              console.log("[mysql error]",err);
            });
            res.send('Table created!')
        
          });
        });   
  
      
        //insert to table
  app.get('tablebrand', (err,res) =>{
    var table = "INSERT INTO brands (name, model) VALUES ?";
    var values = [
  ['Toyota', 'Rav4'],
  ['Mitsubishi', 'Pajero']
 ];
      con.on('error', function(err) {
        console.log("[mysql error]",err);
    })
    res.send('Inserted to table!')
  })
  

  //select from table
app.get('/select', (err,res) =>{
  var select = 'SELECT * FROM brands'
  
  con.on('error', function(err) {
    console.log("[mysql error]",err);
})
res.send('Selected from table!')
})





app.listen('3000', () => {
    console.log('server started on port 3000')
  })
  
    