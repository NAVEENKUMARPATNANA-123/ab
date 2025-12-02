


import fs from "fs";
fs.writeFile('example.txt',"Hello World",(err)=>{
    if(err) throw err;
})

// fs.readFile('module.js', 'utf8', (err, data) => {
//     if (err) throw err;     // Asynchronous
//     console.log(data);
//   });
// console.log("Hello")
// console.log(fs.readFileSync("server.js",'utf-8'))      //synchronous
//   onsole.log("hello2")


// fs.writeFileSync('example.txt', 'Hello, World!'); // sync
// fs.writeFile('example.txt', 'Hello, Async!', (err) => { if(err) throw err; }); // async



fs.appendFile('example.txt', '\n Sync Appended text',(err)=>{
    if (err) throw err;
    console.log("Success")
}); // sync
// fs.appendFile('example.txt', '\nAsync append', (err) => { if(err) throw err; }); // async

// fs.unlinkSync('example.txt'); // sync

