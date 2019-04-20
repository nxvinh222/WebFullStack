const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const QuestionSchema = new Schema({
    content: { type: String, required: true, unique: true }, 
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
}, {
    // _id :false 
    // versionKey: false
    timespamps: true // createdAt & updateAt
})

const QuestionModel = model("question", QuestionSchema);

module.exports = QuestionModel;