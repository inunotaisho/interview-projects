const express = require("express"),
    app = express(),
    fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.post('/write', (req, res) => {
    console.log('Im here fish', req.body)
    fs.readFile(path.resolve(__dirname + './../data-store/data.json'), 'utf8', (err, data) => {
        const allData = JSON.parse(data);
        const newData = allData;
        console.log(allData.pop().id);

        req.body.id = newData.pop().id + 1;

        newData.push(req.body);

        fs.writeFile(path.resolve(__dirname + './../data-store/data.json'), JSON.stringify(newData), (err) => {
            if (err) throw err
            res.end()
        });
    });
});

app.get('/read-all', (req, res) => {
    fs.readFile(path.resolve(__dirname + './../data-store/data.json'), 'utf8', (err, data) => {
        res.send(JSON.parse(data));
    })
    //    (err, data) => {
    //     res.setHeader('Content-Type', 'application/json');


    //    })
});

app.listen(4001, () => console.log('Api server started at 4001'));
