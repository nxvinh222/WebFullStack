const express = require('express');
const app = express();
const fs = require('fs');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.get('/:WebGen', function(req, res){
    const WebGen = req.params.WebGen;
    const data = JSON.parse(fs.readFileSync(__dirname + "/data/" + WebGen + ".json",{encoding: "utf-8"}))
    var output = `<ul style="font-size: 3rem; margin: 2rem;">`;
    data.map(function(name, key){
            output += `<li>${name}</li>`;
        });
    output += `</ul>`;
    console.log(1);
    res.send(output);
})

app.listen(9696, function(err){
    if (err) console.log(err)
    else console.log("Link start!");
})