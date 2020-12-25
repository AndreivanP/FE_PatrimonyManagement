import React, { Component } from "react";
import AuthenticationService from "../../authentication/AuthenticationService"
import AssetDataService from "../../api/AssetDataService"

let username = AuthenticationService.getLoggedInUserName();
let token = AuthenticationService.getLoggedInToken();

class DashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total : ''
        }

    }

    componentDidMount() {        
        AssetDataService.getCurrentTotal(username, token)
            .then(response => this.setState({
                total : response.data.current_total
            }));           
    }

    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
          })
        let {total} = this.state;
        total = formatter.format(total)
        return (
            <h1>
                <div className="dashboard" >
                   Your Total Patrimony is {total}
                </div>
            </h1>
        )
    }

}

export default DashboardComponent