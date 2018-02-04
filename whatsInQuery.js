const express = require('express');
const app = express();

function makeBio(name, age, height) {
    let bio = 'You are called ' + name + '.\nYou are ' + age + 
              ' years old and your height is ' + height; 
    console.log(bio);
    return bio;
}

app.get('/search', (req, res) => {
    let query = req.query,
        name = query.name,
        age = query.age,
        height = query.height,
        bio = makeBio(name, age, height);

    res.end(bio);
});

app.listen(process.argv[2], () => {
    console.log('listening on port %o', process.argv[2]);
});