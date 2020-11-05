const { Component } = require("react");
const axios = require('axios') ;

// import Cadastro from "./components/cadastro.component";

class Login extends Component{
  constructor(props) {
    super(props);
    
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.alert = this.alert.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  alert = () => {
    alert("OI YAMAAAAAAAA")
  }

  onChangeUser(input) {
    this.setState({
      username: input.target.value
    })
  }

  onChangePassword(input) {
    this.setState({
      password: input.target.value
    })
  }

  doLogin() {
    axios.post('http://localhost:3003/login')
    .then(resp => {
      if(Math.floor(resp.status/100) === 2) {
        this.setState()
      }
    })
  }

  render() {
    return (
        <body className='login'>
          <div className="login-container">
            <h3>Login</h3>
            <input type="text"
            className="form"
            placeholder='Nome de Usuário'
            value={this.state.username}
            onChange={this.onChangeUser}
            />
            <input type="text"
            className="form"
            placeholder='Senha'
            value={this.state.password}
            onChange={this.onChangePassword}
            />
            <input type='submit' 
            value="Fazer Login" 
            className="btn-log"
            onClick={this.doLogin}
            />
            <input className="btn" 
            type="button" 
            value="Fazer Cadastro"
            onClick={this.alert}
            />
          </div>
        </body>
    );
  }
}

export default Login;