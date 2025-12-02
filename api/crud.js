    import express from 'express'
    const app=express()

    let a=[
        {id:1,task:"Gym",status:"Done"},
        {id:2,task:"Code",status:"Pending"},
        {id:3,task:"Study",status:"Done"},
        {id:4,task:"Sleep",status:"Pending"},
        {id:5,task:"Eat",status:"Done"}
    ]

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.get('/',(req,res)=>{
        console.log("Available Tasks ")
        for (const i of a)
        {
            if (i.status==="Pending")
            {
                res.write(` ID:${i.id} Task: ${i.task} status : ${i.status}\n`);
            }
        }
        res.end()
    })// to view pending tasks

    app.post('/upload', (req, res) => {
        const { id,task, status } = req.body;
        if (!id || !task || !status)
            res.status(400).json({ message: 'Task and content are required' });
      
        const newTask = { id ,task, status };
        a.push(newTask);
        res.status(200).json({ message: 'Tasks uploaded', Task: newTask });
    });//to upload new task

    app.put('/update',(req,res)=>{
            const {id,task,status}=req.body;
            for (let i of a)
            {
                if(i.id===id)
                {
                    i.task=task;
                    i.status=status;
                    res.status(200).json({message:"Task updated successfully",data:{id,task,status}});
                }
            } 
    })//to update existing task

    app.delete('/delete',(req,res)=>{
        const {id}=req.body;
        a = a.filter(item => item.a !== id);
        res.status(200).json({message:"Task deleted successfully",data:{id}});
    })



      //server at localhost:3000
      app.listen(3000,()=>{
        console.log("Localhost:3000");
      })

 

