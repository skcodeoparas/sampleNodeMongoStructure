const cors = require("cors");
const express = require("express");
const app = express();
const Router = require("./router/main.router");
const mongodb = require("./service/mongoCon.service");

app.use(express.json());
if (String(process.env.NODE_ENV) === "dev") {
  const Whitelist = ["http://localhost:3000", "http://localhiost:4000"];
  var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  };
  app.use(cors(corsOptions));
} else {
  app.use(cors());
}
app.use(mongodb);
app.use(Router);
const port = process.env.port || 6000;
app.listen(port, () => console.log(`server running in port ${port}`));

module.exports = app;
