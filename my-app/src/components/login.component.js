const { Component } = require("react");
const axios = require('axios') ;
import Cadastro from "./components/cadastro.component";

class Login extends Component{
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
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

  onSubmit(resp) {
    this.setState({
      username: '',
      password: ''
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

  onClickRegister() {
    return  <Redirect to="/cadastro" />
  }

  render() {
    return (
        <body>
          <div className="login-container">
            <h3>Login</h3>
          <input type="text"
            className="form"
            placeholder='Nome de Usuário'
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
            onClick={this.onClickRegister}
            />
          </div>
        </body>
    );
  }
}

export default Login;