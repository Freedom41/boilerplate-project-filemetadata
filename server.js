'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer')
// require and use "multer"...
const upload = multer()
const port = 3000;
const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post("/api/fileanalyse", upload.single('upfile'), (req,res,next) => {
    next();
    res.json({
      "File-size": req.file.size,
      "File-Extension": req.file.mimetype,
      "File-name" : req.file.originalname
    })

});

app.listen(port, function () {
  console.log('Node.js listening ...');
});
