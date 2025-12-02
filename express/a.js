// import express from "express";
// const app=express()


// // app.use((req,res,next) => {

// //     res.status(404).send("Error");
// //   });
  

// app.get('/home',(req,res)=>{
//     const time = new Date()
//     res.send("Welcome");
//     console.log("Welcome to home page");
//     console.log(time);
    
// })

// app.use((req,res,next)=>{
//     if (req.query.q === "naveen") {
//         next();
//     }
//     else{
//         res.status(404).send("Error");
//     }
// })

// app.get('/', (req, res, next) => {
//     res.send("Hello")
// }); 


// app.use((req,res,next)=>{
//     if(req.params.id===123 && req.params.password==="abc"){
//         next();
//     }
//     else{
//         res.status(404).send("Error");
//     }
// })

// app.get('/user/:id/:password',(req,res)=>{
//     const userId = req.params.id;
//     const password=req.params.password
//     res.send(`User ID: ${userId},\n Password : ${password}`);
// });

// app.listen(3000,()=>{
//     console.log("Localhost:3000/home");
// })

    //     import express from "express";
    //     const app=express()

    //     app.use((req,res,next)=>{
    //         const name=req.query.name;
    //         if (name==="naveen") {
    //             next();
    //         }
    //         else{
    //             console.log("Invalid user");
    //         }
    //         next();
    //     })


    //     app.all('/update',((req,res)=>{
    //         console.log(`${req.statusCode}, ${req.url}`);
    //         const name=req.query.name;
    //         res.status(200).json({
    //             success: true,
    //             message: 'Thank you for your feedback!',
    //             data: { name }
    //         });
    //     }))

    //     app.listen(3000,()=>{
    //         console.log("Localhost:3000");
    //     })
    // //     res.send(`Search results for: ${query}`);


    import express from "express";      
    const app=express()

    app.get('/',(req,res)=>{
        console.log("Welcome");
        res.send("Welcome");
    })
    
    const a=((req,res,next)=>{
        const err = new Error("Something went wrong");
        next(err)
    })

    const b=((req,res,next)=>{
        const err = new Error("Unknown Error caught");
        next(err)
    })

   
    app.get('/about',a,(req,res)=>{
        res.send("About Page")
    })

    app.get('/home',b,(req,res)=>{
        res.send("home Page")
    })

    app.use((err,req,res,next)=>{
        console.log("Error",err.message);
        res.status(500).send(`Error: ${err.message}`);
        
    })
    
    app.listen(3000,()=>{
        console.log("Localhost:3000");
    })
