const Validator = require("validator");
const isEmpty = require("is-empty");
const { Component } = require("react");
const axios = require('axios');


module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.name) ? data.name : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.username = "Username é necessário";
  } else if (!Validator.isEmail(data.email)) {
    errors.username = "Username é invalido";
  }

// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};


class Cadastro extends Component{
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
        <body>
          <div className="login-container">
          <h1>Cadastro</h1>
          <input type="text"
            className="form"
            placeholder='Cadastro'
            value={this.state.username}
            />
            <input type="text"
            className="form"
            placeholder='Senha'
            value={this.state.password}
            />
            <input type='submit' 
            value="Fazer Login" 
            className="btn-log"
            onClick={this.doLogin}
            />
            <input type='submit'
            value='Fazer cadastro'
            className='btn'
            />
          </div>
        </body>
    );
  }
}

export default Cadastro;