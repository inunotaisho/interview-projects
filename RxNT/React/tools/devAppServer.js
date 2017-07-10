const express = require("express"),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/write', (req, res) => {
    console.log('Im here fish', req.body)
    fs.appendFile(path.resolve(__dirname + './../data-store/data.js'), JSON.stringify(req.data), (err) => {
        if (err) {
            return console.log('Error: ', err);
        }

        console.log('maybe err', err, 'maybe saved', res)
    });
});

app.listen(4001, () => console.log('Api server started at 4001'));
