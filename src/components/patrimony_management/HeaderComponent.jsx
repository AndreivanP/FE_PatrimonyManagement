import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from '../../authentication/AuthenticationService'
import { withRouter } from 'react-router';
import { BUILD_NUMBER } from "../../Properties"
import './Header.css';

class HeaderComponent extends Component {
     
    render() {
        let isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header>
                <nav className="navbar navbar-expand-md custom-bar">
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li ><Link className="nav-link text" to="/dashboard">Dashboard</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link text" to="/assets">Assets</Link></li>} 
                        {isUserLoggedIn && <li ><Link className="nav-link text" to="/investment">Investment Guru</Link></li>}                    
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <div className="text-hidden">{BUILD_NUMBER}</div>
                        {!isUserLoggedIn && <li ><Link className="nav-link text" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link text" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);