function log(req, res, next){
    console.log('testing log');
    next();
}

module.exports = log;