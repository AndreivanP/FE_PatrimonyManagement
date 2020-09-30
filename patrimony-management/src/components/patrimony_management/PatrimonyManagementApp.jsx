import LoginComponent from "./LoginComponent";
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from "./FooterComponent";

class PatrimonyManagementApp extends Component {
    render() {
        return (
            <div className="PatrimonyManagementApp">
                <Router>
                <>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/" component={LoginComponent}/>
                        </Switch>
                    <FooterComponent/>    
                </>
                </Router>
            </div>
        )
    }
}

export default PatrimonyManagementApp