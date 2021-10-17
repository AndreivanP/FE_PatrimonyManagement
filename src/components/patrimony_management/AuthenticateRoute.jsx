import React, { Component } from "react";
import AuthenticationService from "../../authentication/AuthenticationService";
import { Route, Redirect } from "react-router-dom";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import '../../index.css';

class AuthenticateRoute extends Component {
    render() {
        if(AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login"/>
        }
        
    }
}

export default AuthenticateRoute