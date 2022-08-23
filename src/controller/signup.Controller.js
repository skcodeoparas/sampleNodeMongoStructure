const userRepo = require("../repo/userManage.repo");
const r = require('../appData/serverCode/serverResponse').serverResponse

async function SignupController(req, res) {
  userRepo
    .testing()
    .then((d) => {
      console.log(d);
      res.status(r.server.created).json(JSON.stringify(d));
    })
    .catch((e) => {
      console.log(e);
      res.status(r.server.internalServerError).json("there is an error");
    });
}
module.exports = SignupController;
