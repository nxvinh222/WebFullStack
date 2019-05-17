const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const fs = require("fs");
const mongoose = require("mongoose");

const QuestionModel = require("./models/scoreModel")

mongoose.connect("mongodb://localhost/ScoreKeepers", 
    { useNewUrlParser: true},
    function(err){
        if (err) console.log(err)
        else console.log("DB connected");

        QuestionModel.find({}, function(err, docs){
            if (err) console.log(err)
        })
    }
)

app.use('/', express.static(__dirname + '/'))

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
})

app.use(bodyParser.urlencoded({ extended: false}))
app.post("/games", function(req, res){
    const { Player1 } = req.body;
    const { Player2 } = req.body;
    const { Player3 } = req.body;
    const { Player4 } = req.body;
    // console.log(Player2);
    // console.log(Player3);
    // console.log(Player4)
    QuestionModel.create({
        // $push: {1:Player1}
        Player1: [0],
        Player2: [0],
        Player3: [0],
        Player4: [0],
        playerName:{
            "player1": Player1,
            "player2": Player2,
            "player3": Player3,
            "player4": Player4,

        }
 

    }, function(err, docCreated){
        if (err) console.log(err)
        else console.log("Created!");
        res.redirect(`/games/${docCreated._id}`); ;
    })
    // console.log(ids);
    // res.send(Player1);
    // const ids = QuestionModel["_id"];
    // console.log(QuestionModel);
    
})

app.get("/getScore/:id", function(req, res){
    const { id } = req.params;
    console.log(id);
    QuestionModel.findById(id, function(err, docs){
        if (err) console.log(err)
        else res.json(docs);
        
    })
    
})

app.get("/games/:id", function(req, res){
    res.sendFile(__dirname+"/games.html");
})

app.listen(8008, function(err){
    if (err) console.log(err)
    else console.log("ok~~~~~~")
})