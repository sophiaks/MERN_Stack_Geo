const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};


  data.username = !isEmpty(data.username) ? data.name : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  
  if (Validator.isEmpty(data.username)) {
    errors.name = "Name field is required";
  }


  if (Validator.isEmpty(data.password)) {
    errors.password = "Senha deve ser preenchida";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirme sua senha!";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Senha deve ter mais de 6 dígitos";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "As senhas não são iguais";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};