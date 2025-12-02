
// const http = require("http");


// const server = http.createServer((req, res) => {

//   res.writeHead(200, { "Content-Type": "application/json" });
  
//   const response = {
//     message: "Hello from Node.js API!",
//     time: new Date().toISOString(),
//   };

//   res.end(JSON.stringify(response));
// });
//

import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const a = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discount Form</title>
</head>
<body>
    <form id="Form">
        <label>Price: </label>
        <input type="text" id="price" placeholder="Enter price"><br><br>
        <button type="button" onclick="conversion()">Discount</button>
    </form>
    <p id="output"></p>
    <script>
        function conversion(){
            let price = document.getElementById("price").value;
            const discount = 0.1;
            price = Number(price);
            let finalprice = price - (price * discount);
            document.getElementById("output").innerHTML = \`Final price: \${finalprice}\`;
            alert("Final price is: " + finalprice);
        }
    </script>
</body>
</html>`    
  res.end(a)
})
server.listen(3000)



