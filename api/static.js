import express from 'express';
const app=express();

app.use(express.static('uploads'))

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})


