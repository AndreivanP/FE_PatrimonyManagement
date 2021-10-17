import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './components/login/LoginForm.component'
import HeaderComponent from './components/patrimony_management/HeaderComponent'
import LogoutComponent from './components/patrimony_management/LogoutComponent'
import AuthenticatedRoute from './components/patrimony_management/AuthenticateRoute'
import ListAssetComponent from './components/patrimony_management/ListAssetComponent'
import AssetFormComponent from './components/patrimony_management/AssetFormComponent'
import DashboardComponent from "./components/patrimony_management/DashboardComponent";
import FinancialComponent from "./components/patrimony_management/FinancialComponent";

function App() {
  return (
        <Router>
            <HeaderComponent/>
            <Switch>
                    <AuthenticatedRoute path="/users/:username/assets/:id" component={AssetFormComponent}/>
                    <AuthenticatedRoute path="/dashboard/" component={DashboardComponent}/>
                    <AuthenticatedRoute path="/assets/" component={ListAssetComponent}/>
                    <AuthenticatedRoute path="/financial/" component={FinancialComponent}/>
                    <AuthenticatedRoute path="/logout/" component={LogoutComponent}/>
            </Switch>

          <div className="App"> 
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path="/login" component={Login} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
  );
}

export default App;
