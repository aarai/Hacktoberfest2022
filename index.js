const express = require('express');
const path = require('path');

const app = express();
const viewsDir = '/views';
const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, `${viewsDir}/index.html`));
});

app.get('/names', function (req, res) {
  res.send(`<ul><li>Fred</li><li>Bill</li><li>Ted</li></ul>`);
});


app.listen(port);
console.log('Server started at http://localhost:' + port);