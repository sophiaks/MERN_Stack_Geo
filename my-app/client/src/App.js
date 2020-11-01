import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './css/App.css';
import Routes from './routes/routes'
import Login from './components/login.component';

class App extends Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <Login />
                </header>
            </div>
        );
    }
}

export default App;