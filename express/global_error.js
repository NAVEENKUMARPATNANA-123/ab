import express from 'express'
const app=express()

app.get('/', (req, res) => {
    res.send('Welcome ');
  });


  app.get('/about',(req,res)=>{
    const name=req.query.name
    const id=req.query.id
    console.log(name,id)
    res.json({
        message:`welcome ${name}`,
        id: `id is ${id}`
    })
  }
  )

  app.get('/error', (req, res, next) => {
    const err = new Error('caught Error');
    err.statusCode = 400; 
    next(err); 
  });
           
  app.get('/home', (req, res, next) => {
    const err = new Error('Error in home ');
    err.statusCode = 400; 
    next(err); 
  });

  app.use((err, req, res, next) => {
    console.log("error",err.message)
    res.send(`Error: ${err.message}`);

  });
  
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });


  