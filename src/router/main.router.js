const Router= require('express').Router()
const homeController = require('../controller/home.controller')
const SignupController = require('../controller/signup.Controller')
const {loginValidate} = require('../service/validation/validation.service')

Router.get('/',homeController)
//Router.get('/signup', SignupController)
Router.post('/signup', SignupController)
Router.get('/validate',loginValidate, (req, res)=>{
    res.json('validation success');
})

module.exports = Router;
