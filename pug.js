'use strict';
const path = require('path');
const port = process.argv[2];
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    res.render('index', { date: new Date().toDateString() });
});

app.listen(port, () => {
    console.log('Listening on port: %o', port);
});