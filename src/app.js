const express = require('express');
const app = express();
const Router = require('./router/main.router');
const mongodb = require('./service/mongoCon.service')


app.use(mongodb);
app.use(Router);
const port = process.env.port || 6000;
app.listen(port, ()=>console.log(`server running in port ${port}`));

module.exports = app;