
import express from 'express'
import fs from 'fs'

const app = express();

app.get('/', (req, res) => {


  fs.readFileSync('./index.html', function (err, data) {

    if (err) {

      res.writeHead(404);

    }

    else {

      res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
      res.write(data);

    }
    
  })


});

app.listen(3050, () => {
  console.log('Server started on port 3050');
});