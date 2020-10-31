import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import Login from "./components/login.component";

class App extends Component {
    render() {
        return(
            <Login/>
        );
    }
}

export default App;