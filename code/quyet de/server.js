const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const fs = require("fs");

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

    const questions = JSON.parse(
        fs.readFileSync("questions.json", {encoding:"utf-8"}
        ));
    const randomId = Math.floor(Math.random()*questions.length);
    const question = questions[randomId];
    res.send(question);

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
    // lay question tu req.body
    // const question = req.body.question
    const questions = JSON.parse(
        fs.readFileSync("./questions.json", { encoding: "utf-8" })
    );
    const { question } = req.body;
    console.log(req.body)
    const newQuestion = {
        content: question,
        yes: 0,
        no: 0,
        id: questions.length,
    }
    questions.push(newQuestion);
    fs.writeFileSync("./questions.json", JSON.stringify(questions));
    res.send(`<a href="/">Go back</a>`);
    // res.send("ok");
})

//http://localhost:9696/test?ids=3&answer=1
app.get('/test', function(req, res){
    const { ids, answer } = req.query;
    
        

    const questions = JSON.parse(
        fs.readFileSync("questions.json", {encoding:"utf-8"}
        ));
    

    
    questions[ids][answer]++
    console.log(ids);
    console.log(answer);
    console.log(questions[ids][answer])
    //  for (let i=0 ; i < questions.length ; i++)
    //  {
    //      if (questions[i].id == ids) {
    //             questions[i].[vote]++;
    //             // res.send(`<li>yes: ${questions[i].yes}<li>
    //             //           <li>no: ${questions[i].no}<li>`);
    //     }
    // }


    fs.writeFileSync("./questions.json", JSON.stringify(questions));
    res.redirect(`/votes/${questions[ids]["id"]}`);
    
})

// app.get('/vote/:ids', function(req, res){
//     const { ids } = req.params;
//     const questions = JSON.parse(
//         fs.readFileSync("questions.json", {encoding:"utf-8"}
//         ));
//     res.send(`
//             <h1>${questions[ids]["content"]}</h1>
//             <li>yes: ${questions[ids]["yes"]}</li>
//             <li>no: ${questions[ids]["no"]}</li>
//             <a href="/">Go back</a>
//             `)
     
// })

app.listen(9696, function(err){
    if (err) console.log(err)
    else console.log("Link Start!");
})