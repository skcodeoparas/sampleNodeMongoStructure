const mongoose = require('mongoose');
const code = require('../../../appData/DB/main');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        default: code.schema.others.defaultUsername
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    status : {
        type: String,
        default: code.schema.userstatus.registered 
    }
});

module.exports = userSchema;

