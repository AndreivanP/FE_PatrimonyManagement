import React, { Component } from "react";
import AuthenticationService from "../../authentication/AuthenticationService"
import AssetDataService from "../../api/AssetDataService"

class DashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total : '',
            variableIncomeTotal : '',
            variableIncomePercentage: '',
            username: AuthenticationService.getLoggedInUserName(),
            token: AuthenticationService.getLoggedInToken()
        }

    }

    componentDidMount() {        
        AssetDataService.getCurrentTotal(this.state.username, this.state.token)
            .then(response => this.setState({
                total : response.data.current_total,
                variableIncomeTotal : response.data.variable_income_total,
                variableIncomePercentage : response.data.variable_income_percent
            }));           
    }

    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
          })
        let {total} = this.state;
        let {variableIncomeTotal} = this.state;
        let {variableIncomePercentage} = this.state;
        total = formatter.format(total);
        variableIncomeTotal = formatter.format(variableIncomeTotal);
        return (
            <h1>
                <div className="total" >
                   Your Total Patrimony is {total}
                </div>
                <div className="variableIncTotal" >
                   Your Variable Income Total is {variableIncomeTotal}
                </div>
                <div className="percentageIncTotal" >
                   Your Variable Income Percentage is {variableIncomePercentage} %
                </div>
            </h1>
        )
    }

}

export default DashboardComponent