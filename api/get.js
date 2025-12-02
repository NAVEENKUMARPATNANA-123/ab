import express from 'express'
const app=express();

app.get('/',(req,res)=>{
    console.log("Hello ")
    res.send("Hello")

})

app.get('/about',(req,res)=>{
    const name=req.query.name
    const password=req.query.password

    res.json({
        message:`Welcome ${name}`,
        password:`${password}`
    })
})

app.get('/home/:name/:password',(req,res)=>{
    const name = req.params.name
    const password=req.params.password
    if (name==="naveen" && password===123)
    { 
        res.json({
        message:`Welcome ${name}`,
        password:`${password}`
        })
    }
})

app.listen(3000,()=>{
    console.log("Localhost: 3000")
}) 

  


