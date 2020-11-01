import React from 'react';
import Login from "../components/login.component";
import Cadastro from "../components/cadastro.component";
import { Router, Route, Redirect} from "react-router-dom";

const routes =  (
    <Router>
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={Cadastro}/>
            <Redirect from="*" to='/login'/>    
    </Router>
)

export default routes;