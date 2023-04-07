import http from 'http'
import fs from 'fs'


// const server = http.createServer(function (req, res) {


//   fs.readFileSync('./index.html')


//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end();


// })

// server.listen(3050, function (error) {


//   if (error) {

//     console.log("서버 에러");

//   }

//   else {

//     console.log("서버 구동 중...");

//   }


// })

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

app.listen(3050, () => {
  console.log('Server started on port 3050');
});