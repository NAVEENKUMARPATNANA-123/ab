import express from 'express'
import mysql from 'mysql2'

const app=express()

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'softsuave',
    database:'products'
})

db.connect((err)=>{
    if(err){
        console.log("Database connection failed",err)
    }
    console.log("Connected database")
})
app.use(express.json());

app.get('/data',(req,res)=>{
    db.query('select *  from student ',(err,results)=>{
        if(err){
            console.log("Error")
        }
        res.send(results)
    })
})

app.get('/',(req,res)=>{
    db.query('create table student (id int auto_increment primary key, name varchar(20) not null)',(err,results)=>{
        if(err){
            res.send("Error creating table",err)
        }
        res.send("Table created")
    })
}
)   // table created

app.get('/student/:id',(req,res)=>{
    const {id}=req.params
    db.query("select * from student where id=? ",[id],(err,results)=>{
        if(err){
            res.send("error fetching data")
        }
        res.send(results)
        console.log(results);
    })
})//fetching single student

app.post('/insert',(req,res)=>{
    const {name}=req.body;
    db.query('insert into student (name) values (?)',[name],(err,results)=>{
        if(err){
            res.send("Error")
        }
        res.send("Data inserted")
        console.log(results);
    })
})

app.put('/update/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body
    db.query('update student set name=? where id=?',[name,id],(err,results)=>{
        if(err){
            res.send("error")
        }
        
        db.query('select * from student where id=?',[id],(err,results)=>{
            res.send(results)
        })
        console.log(results);
    })
})


// app.put('/update/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body;

//     db.query(`UPDATE student SET name='${name}' WHERE id=${id}`, (err, results) => {
//         if (err) {
//             res.send("error");
//             return;
//         }

//         db.query(`SELECT * FROM student WHERE id=${id}`, (err, results) => {
//             console.log("5")
//             res.send(results);
//         });

//         console.log(results);
//     });
// });


app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params
    db.query('delete from student where id=?',[id],(err,results)=>{
        if(err){
            res.send("error")
        }
        res.send("Data deleted")
        console.log(results);
    })

})//delete student qith id


app.listen(3000,()=>{
    console.log("Server Running");
})