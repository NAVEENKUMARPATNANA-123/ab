import express from "express"
const app=express()

app.get('/',(req,res)=>{
    const name=req.query.name;
    if(name==="naveen"){
        res.send({message:"Welcome Naveen"})
    }
})


app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 


app.post('/about',(req,res)=>{
    const a=req.body;
    res.json({message:"About Page",data:a})
})

app.listen(3000,()=>{
    console.log("Localhost:3000")
});