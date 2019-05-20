const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: String,
    name: String,
},{
    timestamps: true
})




module.exports = mongoose.model("user", UserSchema);
