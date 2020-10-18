import LoginComponent from "./LoginComponent";
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent'
import AuthenticatedRoute from './AuthenticateRoute'
import ListAssetComponent from './ListAssetComponent'
import AssetFormComponent from './AssetFormComponent'
import DashboardComponent from "./DashboardComponent";

class PatrimonyManagementApp extends Component {
    render() {
        return (
            <div className="PatrimonyManagementApp">
                <Router>
                <>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/users/:username/assets/:id" component={AssetFormComponent}/>
                            <AuthenticatedRoute path="/dashboard/" component={DashboardComponent}/>
                            <AuthenticatedRoute path="/assets/" component={ListAssetComponent}/>
                            <AuthenticatedRoute path="/logout/" component={LogoutComponent}/>    
                        </Switch>
                    <FooterComponent/>    
                </>
                </Router>
            </div>
        )
    }
}

export default PatrimonyManagementApp