import history from '../history';
const { Component } = require("react");

// const axios = require('axios');

class Cadastro extends Component{
  constructor(props) {
    super(props);


    this.state = {
      username: '',
      password: ''
    }
  }

  routeChange = () =>{ 
    let path = '/'; 
    history.push(path);
  }

  render() {
    return (
        <body>
          <div className="cadastro-container">
          <h1>Cadastro</h1>
          <input type="text"
            className="form"
            placeholder='Login'
            value={this.state.username}
            />
            <input type="text"
            className="form"
            placeholder='Senha'
            value={this.state.password}
            />
            <input type="text"
            className="form"
            placeholder='Comfirme a Senha'
            value={this.state.password}
            />
            <input type='submit' 
            value="Fazer Cadastro" 
            className="btn-log"
            onClick={this.doRegister}
            />
            <input type='submit'
            value='Jã tem cadastro? Fazer login'
            className='btn'
            onClick={this.routeChange}
            />
          </div>
        </body>
    );
  }
}

export default Cadastro;