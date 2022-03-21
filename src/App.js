import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './components/login/LoginForm.component'
import Asset from './components/asset/AssetForm.component'
import HeaderComponent from './components/patrimony_management/HeaderComponent'
import LogoutComponent from './components/patrimony_management/LogoutComponent'
import AuthenticatedRoute from './components/patrimony_management/AuthenticateRoute'
import DashboardComponent from "./components/dashboard/Dashboard.component";
import investmentComponent from './components/investment/InvestmentForm.component'
import ListAssetComponent from './components/list-asset/ListAsset.component'


function App() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <AuthenticatedRoute path="/dashboard/" component={DashboardComponent} />
        <AuthenticatedRoute path="/assets/" component={ListAssetComponent} />
        <AuthenticatedRoute path="/logout/" component={LogoutComponent} />
        <React.Fragment>
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path="/login" component={Login} />
                  <AuthenticatedRoute path="/users/:username/assets/:id" component={Asset} />
                  <AuthenticatedRoute path="/investment/" component={investmentComponent} />
                </Switch>
        </React.Fragment>
      </Switch>
    </Router>
  );
}

export default App;
