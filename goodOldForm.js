'use strict';
const bodyparser = require('body-parser');
//const pug = require('pug');
const path = require('path');
const port = process.argv[2];
const express = require('express');
const app = express();
const publicDirectory = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(publicDirectory));

function reverseStr(str) {
    return str.split('').reverse().join('');
}

app.get('/home', (req, res) => {
    res.render('oldform');
});

app.post('/form', (req, res) => {
    res.render('oldform', { result: reverseStr(req.body.str) });
});

app.listen(port, () => {
    console.log('Listening on port: %o', port);
});
