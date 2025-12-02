import  fs from  "fs";

fs.appendFile("naveen.txt","\n Appended this ",(err)=>{
    if(err) throw err;
    console.log("Appended");
})

fs.readFile("naveen.txt",'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})  


fs.mkdir("newfolder",{recursive:true},(err)=>{
    if(err) throw err
})


