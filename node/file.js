import fs from "fs";

fs.appendFile("example.txt","\nAppended2",(err)=>{
    console.log("Appended Async");
});


fs.appendFileSync("example.txt","\nAppended1");
