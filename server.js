var express = require('express');
var app = express();

app.use(express.static('files'));

app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s');
});
