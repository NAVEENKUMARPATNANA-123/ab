import express from 'express'
const app=express()
app.use(express.urlencoded({ extended: true }));

const a=((req,res,next)=>{
    const { name, age, email } = req.body;

    if (!name || !age || !email) {
         res.status(400).send("Missing required fields: name, age, email");
    }
    else{
        next();
    }
})

app.post('/register',a,(req,res)=>{
    const { name, age, email } = req.body;
    res.send(`Registration successful for ${name}, Age: ${age}, Email: ${email}`);
})

app.listen(3000,()=>{
    console.log("Localhost:3000/register")
})

