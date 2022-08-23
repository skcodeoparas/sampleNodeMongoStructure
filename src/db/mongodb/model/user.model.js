const mongoose = require('mongoose');
const userSchema = require('../schema/user.schema');
const dbData = require('../../../appData/DB/main');

const userModel = mongoose.model(dbData.model.name.user, userSchema);

module.exports = userModel;
