const mongoose = require('mongoose');

   async function connection(){
        try{
            mongoose.connect(process.env.mongodburl );
        }catch(e){
            throw `there is an error : ${e}`
        }
    }

module.exports = connection;