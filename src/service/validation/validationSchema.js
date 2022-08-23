const Joi = require('joi');

const loginValidationSchema = Joi.object({
    email: Joi.string()
        .email()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')).required()
});

exports.loginSchema = loginValidationSchema;