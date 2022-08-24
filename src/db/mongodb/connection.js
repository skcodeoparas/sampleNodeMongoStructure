const mongoose = require('mongoose');

   async function connection(){
    if(mongoose.connection.readyState === 0){
        try{
                    mongoose.connect(process.env.mongodburl );
                    console.log("connecting DB")
                }catch(e){
                    throw `there is an error : ${e}`
                }
    }else { return " connected" } 
    }
console.log(mongoose.connection.readyState);
module.exports = connection;