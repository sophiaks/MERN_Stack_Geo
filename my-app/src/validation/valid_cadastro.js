const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.passwordConf = !isEmpty(data.passwordConf) ? data.passwordConf : "";
  
  if (Validator.isEmpty(data.username)) {
    errors.username = "Name field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Senha deve ser preenchida";
  }
if (Validator.isEmpty(data.password2)) {
    errors.passwordConf = "Confirme sua senha!";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Senha deve ter mais de 6 dígitos";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.passwordConf = "As senhas não são iguais";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};