const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const fs = require("fs");
const mongoose = require("mongoose");

const QuestionModel = require("./models/questionModel")


mongoose.connect("mongodb://localhost/quyet-de-21", 
    { useNewUrlParser: true},
    function(err){
        if (err) console.log(err)
        else console.log("DB connected");

        // QuestionModel.create({
        //     content: "Hello World",

        // }, function(err, docCreated){
        //     if (err) console.log(err)
        //     else console.log("Created!");
        // })

        QuestionModel.find({}, function(err, docs){
            if (err) console.log(err)
            else console.log("Question: ", docs);
        })
    }
)



// data-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

app.get("/", function(req, res){
    // const questions = JSON.parse(
    //     fs.readFileSync("questions.json", {encoding:"utf-8"}
    //     ));
    // const randomId = Math.floor(Math.random()*questions.length);
    // const question = questions[randomId];
    // res.send(`
    // <h1>${question.content}</h1>

    // <form action="/test">
    // <input type="hidden" name="ids" value="${randomId}">
    // <input type="hidden" name="answer" value="yes">
    //      <button type="submit">yes</button>
    // </form>

    // <form action="/test?ids=${randomId}&answer=0">
    // <input type="hidden" name="ids" value="${randomId}">
    // <input type="hidden" name="answer" value="no">
    //      <button type="submit">no</button>
    // </form>

   

    // <a href="/">Chơi tiếp</a>
    // <a href="/ask">Thêm câu hỏi</a>
    // <a href="/vote/${randomId}">Kết quả vote</a>
    // `)
    //get random question
    res.sendFile(__dirname + "/home.html");
})

app.get("/randomquestion", function(req, res){

    //Cach 1
    // QuestionModel.count({}, function(err, count){
    //     if (err) console.log(err)
    //     else QuestionModel.find({}, function(err, docs){
    //         if (err) console.log(err)
    //         else res.send(docs[Math.floor(Math.random()*count)]);
    //     })
      
    // });

    //Cach 1.5
    // QuestionModel.find({}, function(err, docs){
    //     if (err) console.log(err)
    //     else {
    //         const randomIndex = Math.floor(Math.random()*docs.length)
    //         const question = docs[randomIndex];
    //         // res.send(question);
    //         res.json(question);
    //     }
    // })

    //Cach 2
    QuestionModel.count({}, function(err, count){
        if (err) console.log(err)
        else {
            const randomId = Math.floor(Math.random()*count);
            QuestionModel
                .findOne({})
                .skip(randomId)
                .exec(function(err, question){
                    if (err) console.log(err)
                    else res.json(question)
                })
        }
    })
  
    

})

app.get("/ask", function(req, res){
    res.sendFile(__dirname + "/ask.html")
})


app.get("/getinfo/:id", function(req,res){
    const questionsList = JSON.parse(
        fs.readFileSync("questions.json", {encoding: "utf-8"} )      
    );
    const { id } = req.params;
    const question = questionsList[id];
    console.log(question);
    res.send(question);
})

app.get("/votes/:id", function(req, res){
    const { id } = req.params;
    res.sendFile(__dirname + "/votes.html");
})

app.post("/addquestion", function(req, res){
    
    const { question } = req.body;
    QuestionModel.create({
            content: question,

        }, function(err, docCreated){
            if (err) console.log(err)
            else console.log("Created!");
        })


    res.send(`<a href="/">Go back</a>`);

})

//http://localhost:9696/test?ids=3&answer=1
app.get('/test', function(req, res){
    const { ids, answer } = req.query;
    
        

    const questions = JSON.parse(
        fs.readFileSync("questions.json", {encoding:"utf-8"}
        ));
    

    // QuestionModel.find({}, function(err, docs){
    //     if 
    // })

    questions[ids][answer]++
    console.log(ids);
    console.log(answer);
    console.log(questions[ids][answer])
   


    fs.writeFileSync("./questions.json", JSON.stringify(questions));
    res.redirect(`/votes/${questions[ids]["id"]}`);
    
})


app.listen(9696, function(err){
    if (err) console.log(err)
    else console.log("Link Start!");
})