// import express from 'express';
// const app=express()
// const port =3000
// app.get('/update', (req, res) => {
//     res.send('Hello World from Express!');
    
//   });
// app.get('/',(req,res)=>{
//     res.send("Application confirmed")
//     console.log("Success");
// })
// app.all('/app',(req,res)=>{
//     res.send('Welcome to the app')
//     console.log("Welcome")
// })
// app.use( (req, res) => {
//     res.status(404).send('404 - Page not found');
//     console.log("Error");
//   });


// app.listen(port, () => {
//     console.log(`At http://localhost:${port}/update`);
//   });



  import express from 'express'
  const app=express()


  function abc(req,res,next){
    console.log("Hello");
    next();
  }

  
  app.use(abc);
  app.get('/',(req,res)=>{
    res.send('Hello')
  })

 
  app.get('/update',(req,res)=>{
    let a=['apple','banana']
    for (const i of a){
      res.write(`Fruit:${i} \n`);
    }
    res.end();
  })




  app.use((req, res, next) => {
    console.log("hi");
    next();
  });
  app.get('/user/:id/:password', (req, res) => {
    const userId = req.params.id;
    const password=req.params.password
    res.send(`User ID: ${userId},\n Password : ${password}`);
  });


  app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search result for: ${query}`);
  });

  app.use((req, res, next) => { 
    console.log("Uploaded successfully");
    next();
  })

  app.all('/upload',(req,res)=>{
    res.write("File uploaded successfully");
    console.log("Welcome")
    res.end();
  });


  app.listen(3000);



  app.use(express.urlencoded({extended:true}))

  const {a,b,c}=req.body;
