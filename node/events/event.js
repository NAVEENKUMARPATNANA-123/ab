
import EventEmitter from 'events';
const Emitter=new EventEmitter();

Emitter.on('event',(data)=>{
    console.log(data);
})
function funcemitter(data){
    console.log(`Functional emitter ${data}`)
}


Emitter.on('greet',(data)=>{
    console.log(`hello ${data}`)
})
Emitter.on('Functional',funcemitter)


Emitter.emit('event','Naveen')
Emitter.emit('Functional','naveen')
Emitter.removeAllListeners('greet')   //off
Emitter.emit('greet', 'Alice')


import fs from "fs";
fs.readFile("event.js",'utf-8',(data,err)=>{
    if(err) console.log(err);
    console.log(data);
})

fs.appendFile("event.js",`import f6 from "fs"`,(err)=>{
    console.log(err);
})

fs.writeFile("event.js","abc",(err)=>{
    console.log(err);
    
})
//import f7 from "fs"import f6 from "fs"import f6 from "fs"