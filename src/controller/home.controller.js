const r = require('../appData/serverCode/serverResponse').serverResponse
async function HomeController(req, res){
    res.status(r.server.success).json("Welcome Home");
}

module.exports = HomeController;
