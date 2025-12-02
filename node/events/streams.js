// import fs from 'fs';

// const readable = fs.createReadStream('example.txt', 'utf8');

// readable.on('data', (chunk) => {
//   console.log('Received chunk:', chunk);
// });

// readable.on('end', () => {
//   console.log('Finished reading file.');
// });

// readable.on('error', (err) => {
//   console.error('Error:', err);
// });

//readable

import fs from 'fs';

const writable = fs.createWriteStream('example.txt');

writable.write('Hello, ');
writable.write('world!');
writable.on('end',()=>{
    console.log("Written content to file")
})

writable.on('finish', () => {
  console.log('File writing completed.');
});

