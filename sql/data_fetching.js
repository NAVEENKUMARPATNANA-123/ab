

// import express from 'express';
// import mysql from 'mysql2';

// const app = express();

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',       
//   password: 'softsuave',
//   database: 'employee'
// });


// db.connect((err) => {
//   if (err) {
//     console.log('Database connection failed:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// app.get('/data', (req, res) => {
//     db.query('SELECT * FROM books', (err, results) => {
        
//         if (err) {
//         res.status(500).send('Error fetching data from database');
//         return;
//         }
//         res.send(results);
//     });
// })


// app.get('/borrowings',(req,res)=>{
//     db.query('select borrow_id, borrow_date from borrowings',(err,results)=>{
//         if(err){
//             res.send("Error fetching data");
//         }
//         res.send(results);
//     })
// })
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


import express from 'express'
import mysql from 'mysql2'

const app=express()

const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'softsuave',
  database:'employee'
})

db.connect((err)=>{
  if(err){
    console.log("Connection failed",err)
    return 
  }
  console.log("Database connected")
})

app.get('/data',(req,res)=>{
  db.query('SELECT * FROM authors',(err,results)=>{
    if(err){
      res.send("Error in fetching data",err)
    }
    res.json(results)
  })
})

app.get('/books', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        
        if (err) {
        res.status(500).send('Error fetching data from database');
        return;
        }
        res.json(results);
    });
})


app.listen(3000)