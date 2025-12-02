import express, { json } from "express";
const app=express()

let posts=[
    {id:1,title:"First Post",content:"Welcome"},
    {id:2,title:"Second Post",content:"Hello World"},
    {id:3,title:"Third Post",content:"Hello"}
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/posts',(req,res)=>{
    for(let i of posts){
        res.write(`Id : ${i.id} Title : ${i.title} Content : ${i.content}\n`);
    }
    res.status(200);
    res.end();
})

app.get('/posts/:id',(req,res)=>{
    const id=req.params.id
    let found=false;
    for(let i of posts){
        if(i.id==id){
            found=true;
            res.write(`Id : ${i.id} Title : ${i.title} Content : ${i.content}\n`);
            res.status(200);
            res.end();
        }
    }
    if(!found){
        res.status(404).send("Post not found");
    }
})

app.post('/posts/add',(req,res,)=>{
    const {id,title, content}=req.body;
    if(!id || !title || !content){
        res.status(400).send("Id, Title and Content are required");
    }
    const newPost={id,title,content};
    posts.push(newPost)
    res.status(200).send("Post added Successfully")
    res.end();
})

app.put('/posts/update',(req,res)=>{
    const {id,title,content}=req.body;
    let found=false;
    for(let i of posts){
        if (i.id===id){
            found=true;
            i.title=title;
            i.content=content;
            break;
        }
    }
    if(!found){
        res.status(404).send("Post not found")
    }
    else{
        res.status(200).send(`Post updated successfully with id ${id}`);
    }
    
})



// app.delete('/posts/delete',(req,res)=>{
//     const {id}=req.body;
//     let found=false
//     found=posts.find(post=>post.id===id);
//     if(!found){
//         console.log(found)
//         res.status(404).send("Post not found");
//         return;
//     }
//     else{
//         posts=posts.filter(deletePost=>deletePost.id!==id);
//         res.status(200);
//         res.send(`post deleted successfully with id ${id}`);
//         }
// })


app.delete('/posts/delete/:id', (req, res) => {
    const { id } = parseInt(req.params.id)
    let found=true
    // Find the post
    found = posts.find(post => post.id == id);
  
    // If not found
    if (!found) {
        console.log("not found")
      return res.status(404).send("Post not found");
    }
  
    // Delete the post
    posts = posts.filter(post => post.id !== id);
  
    // Success response
    res.status(200).send(`Post deleted successfully with id ${id}`);
  });

  
app.listen(3000,()=>{
    console.log("At http://localhost:3000");
})


