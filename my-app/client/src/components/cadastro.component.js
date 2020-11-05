import '../css/App.css';
import axios from 'axios'
import React from 'react';

export default class Cadastro extends React.Component{
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUsername(e) {
    this.setState({ username: e.target.value })
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      username: this.state.username,
      password: this.state.password};

    axios.post('/api/cadastro', userObject)
      .then(res => console.log(res.data));

    this.setState({ username: '', password: ''})
  }

  render() {
    return (
        <body className='body'>
          <div className="cadastro-container">
          <h3>Cadastro</h3>
          <input type="text"
            className="form"
            placeholder='Login'
            name='username'
            onChange={this.onChangeUsername}
            />
            <input type="text"
            className="form"
            placeholder='Senha'
            name='password'
            onChange={this.onChangePassword}
            />
            <input type="text"
            className="form"
            placeholder='Confirme a Senha'
            name='passwordConf'
            />
            <input type='submit' 
            value="Fazer Cadastro" 
            className="btn-log"
            onClick={this.onSubmit}
            />
            <input type='submit'
            value='Já tem cadastro? Fazer login'
            className='btn'
            />
          </div>
        </body>
    );
  }
}
