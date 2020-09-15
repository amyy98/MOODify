const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// handle requests for static files
app.use('/build', express.static(path.join(__dirname, '../build')));

// main point of entry
app.get('/', function (req, res) {
  res.status(200)
  .sendFile(path.resolve(__dirname, '..client/entry.html'))
})


app.use('*', (req, res) => {
  res.status(404).send('Not Found')
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
module.exports = app;