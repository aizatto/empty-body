const express = require('express');
const app = express();

app.get('/null', (req, res) => {
  res.send(null);
});
// fetch('http://localhost:3000/null').then((res) => res.json()).then(json => console.log(json));
// Uncaught (in promise) SyntaxError: Unexpected end of JSON input

app.get('/json', (req, res) => {
  res.send('{}');
});
// fetch('http://localhost:3000/json').then((res) => res.json()).then(json => console.log(json));
// Object {}

app.listen(3000, () => {
  console.log('curl http://localhost:3000/');
});
