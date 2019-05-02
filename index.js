var express = require('express');
var helmet = require('helmet');

var app = express();

app.use(helmet());
app.listen(3000, function() {
    console.log('開始');
});

app.get('/hello', function(req, res, err) {
    res.end('hello world');
});

app.post('/post', function(req, res, err) {
    res.end('こんにちは');
});