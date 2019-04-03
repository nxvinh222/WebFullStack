const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.get('/:WebGen', function(req, res){
    const WebGen = req.params.WebGen;
    
    try{
        // Get data
        const data = JSON.parse(fs.readFileSync(__dirname + "/data/" + WebGen + ".json", { encoding: "utf-8" }))
        // Create html string
        var output = `<ul style="font-size: 3rem; margin: 2rem;">`;
        data.map(function(name, key){
                output += `<li>${name}</li>`;
            });
        output += `</ul>`;
        res.send(output);
    } catch (error){
        res.send("404 Not Found!");
    }
    
    
})


app.listen(9696, function(err){
    if (err) console.log(err)
    else console.log("Link start!");
})