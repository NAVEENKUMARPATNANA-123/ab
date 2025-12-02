import fs from "fs"; 

fs.readFile('config.json','utf-8',(err,data)=>{
    if(err){
        console.log("Error occured ",err)
    }
    const json_data = JSON.parse(data);  
    console.log(json_data)
    console.log(json_data.port)
})