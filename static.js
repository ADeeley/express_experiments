'use strict';
const path = require('path');
const stylus = require('stylus').middleware('public');
const express = require('express');
const app = express();
const port = process.argv[2];
const dir = process.argv[3] || path.join(__dirname, 'public');

app.use(stylus);
app.use(express.static(dir));

app.listen(port, () => {
    console.log('Listening on port: %o', port);
});