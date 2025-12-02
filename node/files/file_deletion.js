import fs from "fs";

fs.unlink("naveen.txt",(err)=>{
    if(err) throw err;
    console.log("Deleted file");
})

fs.rmdir("newfolder",(err)=>{
    if(err) throw err;
    console.log("Folder removed")
})