const { loginSchema } = require("./validationSchema");
const formname = require("../../appData/client/forms").forms.login;
const errorcode = require("../../appData/errorCode/appError").errors.forms.login;

exports.loginValidate = async (req, res, next) => {
  const { value, error } = loginSchema.validate({
    email: req.body[formname.email],
    password: req.body[formname.password],
  });
  if (error.details) {
    String(error.details[0].path) === String(formname.email)
      ? res.json(errorcode.FL01)
      : String(error.details[0].path) === String(formname.password)
      ? res.json(errorcode.FL02)
      : res.json(errorcode.FL03);
  } else {
    next();
  }
};
