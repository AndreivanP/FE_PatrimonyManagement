import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from '../../authentication/AuthenticationService'
import { withRouter } from 'react-router';
import { BUILD_NUMBER } from "../../Properties"

class HeaderComponent extends Component {
     
    render() {
        let isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.linkedin.com/in/andreivansantos" className="navbar-brand">Andreivan</a></div>
                    <ul className="navbar-nav">                        
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/dashboard">Dashboard</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/assets">Assets</Link></li>} 
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/financial">Financial Calc</Link></li>}                    
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <div>`{BUILD_NUMBER}`</div>
                        {!isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);