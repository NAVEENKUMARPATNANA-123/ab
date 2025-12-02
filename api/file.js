import express from 'express';
import multer from 'multer';

const app = express();
const upload = multer({ dest: 'uploads/' }); 

app.post('/upload', upload.any(), (req, res) => {
  res.json({ message: 'Files uploaded!', files: req.files });
});

console.log("Hello");

app.listen(3000, () => console.log('Server running on http://localhost:3000'));