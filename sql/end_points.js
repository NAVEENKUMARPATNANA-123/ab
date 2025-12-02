import express from 'express';
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
        console.log("Db connection failed")
    }
    console.log("Connected db")

})

app.use(express.json());

app.get('/data/:id',(req,res)=>{
    const {id}=req.params;
    db.query('select b.book_id,b.title,bw.borrow_date from books b join borrowings bw on b.book_id=bw.book_id where b.book_id=?',[id],(err,results)=>{
        if(err){
            res.send("Error fetching data")
        }
        res.send(results)
    })

})

app.listen(3000,()=>{
    console.log("Server at localhost:3000")
})