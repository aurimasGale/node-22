const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const PORT = 3000;

//Middleware
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT, () => console.log('server working on port', PORT));
