const monogoConnection = require('../db/mongodb/connection')
async function mongoCon (req, res, next) {
 try{
    monogoConnection().then(()=>{console.log("dbConnected")}).catch(e=>{
        throw `${e}`
    });
    // to stop app if DB not connected remove next and handel inventory 
    next();
 }
 catch(e){
// report logging error
    console.log(e);
    next();
 }
}
module.exports= mongoCon;