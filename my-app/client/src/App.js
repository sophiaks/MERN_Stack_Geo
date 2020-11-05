import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './components/login.component';
import Cadastro from './components/cadastro.component';
import Home from './components/home.component';
import NavBar from './components/Nav';

import '../src/css/nav.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className="App">
                    <NavBar />
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/cadastro" component={Cadastro}/>
                        <Route exact path="/" component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;