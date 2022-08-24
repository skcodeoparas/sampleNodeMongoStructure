const userModel = require('../db/mongodb/model/user.model')

class Usermanage {
    constructor(){
        this.model= userModel;
    }

    async testing(){
        const data = new userModel({
            email:"sampleemail",
            password:"12312asd#"
        });
        try{
            const result = await data.save();
            return result;
        }catch(e){
            throw e
        }
        
    }
    async registerUser(data){
        const user = new this.model({email: data.email, password : data.password});
        try{
            const dbdata= await user.save()
            return dbdata;
        }catch(err){
            throw `error : ${err}`
        }
    }
    
} 
const userRepo = new Usermanage();

module.exports = userRepo