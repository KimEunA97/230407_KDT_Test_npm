
import express from 'express'
import fs from 'fs'

const app = express();

app.get('/', (req, res) => {


  fs.readFile('./index.html', function (err, data) {

    if (err) {

      res.writeHead(404);
      res.end();

    }

    else {

      res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
      res.write(data);
      res.end();

    }

  })


});

app.listen(3050, (error) => {

  if (error) {

    console.log('Server error');


  }


  else {
    console.log('Server started on port 3050');
  }

});