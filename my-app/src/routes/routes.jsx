import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from "../components/login.component";

export default props => (
    <Router>
        <Route path="/login" component={Login}/>
        <Route path="/cadastro" component={Cadastro}/>
        <Redirect from="*" to="/login"/>

    </Router>
)