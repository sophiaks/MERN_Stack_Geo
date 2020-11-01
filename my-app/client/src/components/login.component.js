import history from '../history';
const { Component } = require("react");
const axios = require('axios') ;



// import Cadastro from "./components/cadastro.component";

class Login extends Component{
  constructor(props) {
    super(props);
    
    
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.alert = this.alert.bind(this);
    this.routeChange = this.routeChange.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  routeChange = () =>{ 
    let path = '/cadastro'; 
    history.push(path);
  }

  alert = () => {
    alert("ooooooooi")
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
        <body>
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

          {/* <Link to='/cadastro'/> */}

          </div>
        </body>
    );
  }
}

export default Login;