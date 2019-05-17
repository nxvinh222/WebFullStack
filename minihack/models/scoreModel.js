const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const QuestionSchema = new Schema({
    // content: { type: String, required: true, unique: true }, 
    // yes: { type: Number, default: 0 },
    // no: { type: Number, default: 0 },

    player1: [Number],
    player2: [Number],
    player3: [Number],
    player4: [Number],
    playerName:{
        player1: String,
        player2: String,
        player3: String,
        player4: String,
        
    }
}, {
    // _id :false 
    // versionKey: false
    timespamps: true // createdAt & updateAt
})

const QuestionModel = model("Round", QuestionSchema);

module.exports = QuestionModel;